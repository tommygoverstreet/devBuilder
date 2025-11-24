const jsTipsData = {
  'arrow': {
    type: 'tip',
    text: 'Arrow functions do not have their own "this" context.',
    icon: 'fas fa-lightbulb'
  },
  'class': {
    type: 'snippet',
    text: 'Use "extends" to inherit from another class.',
    icon: 'fas fa-code'
  },
  'object': {
    type: 'example',
    text: 'Object shorthand: { name, age } is same as { name: name, age: age }',
    icon: 'fas fa-info-circle'
  }
};

function generateJS() {
  const name = document.getElementById('js-name').value || 'myFunction';
  const type = document.getElementById('js-type').value;
  const params = document.getElementById('js-params').value;
  const isExport = document.getElementById('js-export').checked;
  const isAsync = document.getElementById('js-async').checked;

  let code = '';
  const prefix = isExport ? 'export ' : '';
  const asyncPrefix = isAsync ? 'async ' : '';

  switch (type) {
    case 'function':
      code = `${prefix}${asyncPrefix}function ${name}(${params}) {\n  // TODO: Implement\n}`;
      break;
    case 'arrow':
      code = `${prefix}const ${name} = ${asyncPrefix}(${params}) => {\n  // TODO: Implement\n};`;
      break;
    case 'class':
      code = `${prefix}class ${name} {\n  constructor(${params}) {\n    // Init\n  }\n}`;
      break;
    case 'object':
      code = `${prefix}const ${name} = {\n  key: "value",\n  method() {\n    return true;\n  }\n};`;
      break;
    case 'if-else':
      code = `if (condition) {\n  // true\n} else {\n  // false\n}`;
      break;
    case 'array':
      code = `${prefix}const ${name} = [${params}];`;
      break;
    case 'switch':
      code = `switch (key) {\n  case value:\n    break;\n  default:\n    break;\n}`;
      break;
    case 'try-catch':
      code = `try {\n  // Code\n} catch (error) {\n  console.error(error);\n}`;
      break;
    case 'promise':
      code = `${prefix}const ${name} = new Promise((resolve, reject) => {\n  // Async op\n  if (true) resolve('Success');\n  else reject('Error');\n});`;
      break;
  }

  document.getElementById('js-output').value = code;

  // Show Tip
  const tipsContainer = document.getElementById('js-tips');
  tipsContainer.innerHTML = '';
  if (jsTipsData[type]) {
    const tip = jsTipsData[type];
    const badgeClass = tip.type === 'tip' ? 'badge-tip' : (tip.type === 'snippet' ? 'badge-snippet' : 'badge-example');
    tipsContainer.innerHTML = `
            <div class="badge ${badgeClass}">
                <i class="${tip.icon}"></i>
                <span>${tip.text}</span>
            </div>
        `;
  }
}

// Dynamic Label Update
document.getElementById('js-type').addEventListener('change', (e) => {
  const label = document.getElementById('js-params-label');
  if (e.target.value === 'object') {
    label.textContent = 'Properties (comma separated)';
  } else if (e.target.value === 'array') {
    label.textContent = 'Items (comma separated)';
  } else {
    label.textContent = 'Parameters (comma separated)';
  }
});

// Snippets Integration
function getJSState() {
  return {
    name: document.getElementById('js-name').value,
    type: document.getElementById('js-type').value,
    params: document.getElementById('js-params').value,
    export: document.getElementById('js-export').checked,
    async: document.getElementById('js-async').checked
  };
}

function setJSState(data) {
  if (!data) return;
  document.getElementById('js-name').value = data.name || '';
  document.getElementById('js-type').value = data.type || 'function';
  document.getElementById('js-params').value = data.params || '';
  document.getElementById('js-export').checked = data.export || false;
  document.getElementById('js-async').checked = data.async || false;
  generateJS();
}

initSnippets('js-builder', getJSState, setJSState);

