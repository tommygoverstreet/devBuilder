function generatePHP() {
  const name = document.getElementById('php-name').value || 'MyClass';
  const type = document.getElementById('php-type').value;
  const namespace = document.getElementById('php-namespace').value;
  const props = document.getElementById('php-props').value.split(',').filter(p => p.trim());
  const methods = document.getElementById('php-methods').value.split(',').filter(m => m.trim());

  let code = `<?php\n\n`;

  if (type === 'pdo') {
    code += `try {
    $dsn = "mysql:host=localhost;dbname=testdb;charset=utf8mb4";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    $pdo = new PDO($dsn, "username", "password", $options);
} catch (PDOException $e) {
    throw new PDOException($e->getMessage(), (int)$e->getCode());
}`;
  } else {
    if (namespace) code += `namespace ${namespace};\n\n`;

    code += `${type} ${name} {\n`;

    // Properties
    if (props.length > 0) {
      props.forEach(prop => {
        code += `    ${prop.trim()};\n`;
      });
      code += `\n`;
    }

    // Methods
    if (methods.length > 0) {
      methods.forEach(method => {
        code += `    public function ${method.trim()}()\n    {\n        // TODO: Implement ${method.trim()}\n    }\n\n`;
      });
    }

    code += `}`;
  }

  document.getElementById('php-output').value = code;
}

// Snippets Integration
function getPHPState() {
  return {
    name: document.getElementById('php-name').value,
    type: document.getElementById('php-type').value,
    namespace: document.getElementById('php-namespace').value,
    props: document.getElementById('php-props').value,
    methods: document.getElementById('php-methods').value
  };
}

function setPHPState(data) {
  if (!data) return;
  document.getElementById('php-name').value = data.name || '';
  document.getElementById('php-type').value = data.type || 'class';
  document.getElementById('php-namespace').value = data.namespace || '';
  document.getElementById('php-props').value = data.props || '';
  document.getElementById('php-methods').value = data.methods || '';
  generatePHP();
}

initSnippets('php-builder', getPHPState, setPHPState);

