function generateReact() {
  const name = document.getElementById('react-name').value || 'MyComponent';
  const type = document.getElementById('react-type').value;
  const props = document.getElementById('react-props').value.split(',').map(p => p.trim()).filter(p => p);
  const useState = document.getElementById('react-usestate').checked;
  const useEffect = document.getElementById('react-useeffect').checked;
  const useRef = document.getElementById('react-useref').checked;
  const useContext = document.getElementById('react-usecontext').checked;
  const isTs = document.getElementById('react-ts').checked;
  const isExportDefault = document.getElementById('react-export-default').checked;

  let imports = ['React'];
  let hooks = [];
  if (useState) hooks.push('useState');
  if (useEffect) hooks.push('useEffect');
  if (useRef) hooks.push('useRef');
  if (useContext) hooks.push('useContext');

  if (hooks.length > 0) {
    imports = [`import React, { ${hooks.join(', ')} } from 'react';`];
  } else {
    imports = [`import React from 'react';`];
  }

  let code = imports.join('\n') + '\n\n';

  if (isTs) {
    code += `interface ${name}Props {\n`;
    props.forEach(p => {
      code += `  ${p}: any;\n`;
    });
    code += `}\n\n`;
  }

  const propsStr = props.length > 0 ? `{ ${props.join(', ')} }` : '';
  const tsType = isTs ? `: React.FC<${name}Props>` : '';

  if (type === 'class') {
    code += `class ${name} extends React.Component${isTs ? `<${name}Props>` : ''} {\n`;
    code += `  constructor(props) {\n    super(props);\n    this.state = {};\n  }\n\n`;
    if (useEffect) code += `  componentDidMount() {\n    // Effect\n  }\n\n  componentWillUnmount() {\n    // Cleanup\n  }\n\n`;
    code += `  render() {\n    return (\n      <div>\n        <h1>${name}</h1>\n      </div>\n    );\n  }\n}\n`;
  } else {
    if (type === 'functional') {
      code += `function ${name}(${propsStr})${isTs ? `: JSX.Element` : ''} {\n`;
    } else {
      code += `const ${name}${tsType} = (${propsStr}) => {\n`;
    }

    if (useState) code += `  const [state, setState] = useState(null);\n`;
    if (useRef) code += `  const ref = useRef(null);\n`;
    if (useContext) code += `  const context = useContext(MyContext);\n`;
    if (useEffect) {
      code += `\n  useEffect(() => {\n    // Effect\n    return () => {\n      // Cleanup\n    };\n  }, []);\n`;
    }

    code += `\n  return (\n    <div>\n      <h1>${name}</h1>\n    </div>\n  );\n`;

    code += type === 'functional' ? `}\n` : `};\n`;
  }

  if (isExportDefault) {
    code += `\nexport default ${name};`;
  } else {
    if (type !== 'class') {
      code = code.replace(`function ${name}`, `export function ${name}`).replace(`const ${name}`, `export const ${name}`);
    } else {
      code = code.replace(`class ${name}`, `export class ${name}`);
    }
  }

  document.getElementById('react-output').value = code;
}

// Snippets Integration
function getReactState() {
  return {
    name: document.getElementById('react-name').value,
    type: document.getElementById('react-type').value,
    props: document.getElementById('react-props').value,
    useState: document.getElementById('react-usestate').checked,
    useEffect: document.getElementById('react-useeffect').checked,
    useRef: document.getElementById('react-useref').checked,
    useContext: document.getElementById('react-usecontext').checked,
    ts: document.getElementById('react-ts').checked,
    exportDefault: document.getElementById('react-export-default').checked
  };
}

function setReactState(data) {
  if (!data) return;
  document.getElementById('react-name').value = data.name || '';
  document.getElementById('react-type').value = data.type || 'functional';
  document.getElementById('react-props').value = data.props || '';
  document.getElementById('react-usestate').checked = data.useState || false;
  document.getElementById('react-useeffect').checked = data.useEffect || false;
  document.getElementById('react-useref').checked = data.useRef || false;
  document.getElementById('react-usecontext').checked = data.useContext || false;
  document.getElementById('react-ts').checked = data.ts || false;
  document.getElementById('react-export-default').checked = data.exportDefault !== false;
  generateReact();
}

initSnippets('react-builder', getReactState, setReactState);

