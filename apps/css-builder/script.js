function updateCSS() {
  const selector = document.getElementById('css-selector').value;
  const bg = document.getElementById('css-bg').value;
  const color = document.getElementById('css-color').value;
  const fontSize = document.getElementById('css-fontsize').value;
  const padding = document.getElementById('css-padding').value;
  const radius = document.getElementById('css-radius').value;
  const display = document.getElementById('css-display').value;
  const justify = document.getElementById('css-justify').value;

  // Update Range Labels
  document.getElementById('css-fontsize-val').textContent = `${fontSize}px`;
  document.getElementById('css-padding-val').textContent = `${padding}px`;
  document.getElementById('css-radius-val').textContent = `${radius}px`;

  // Toggle Flex Options
  const flexOpts = document.getElementById('css-flex-opts');
  if (display === 'flex') {
    flexOpts.style.display = 'block';
  } else {
    flexOpts.style.display = 'none';
  }

  let css = `${selector} {\n`;
  css += `  background-color: ${bg};\n`;
  css += `  color: ${color};\n`;
  css += `  font-size: ${fontSize}px;\n`;
  css += `  padding: ${padding}px;\n`;
  css += `  border-radius: ${radius}px;\n`;
  css += `  display: ${display};\n`;

  if (display === 'flex') {
    css += `  justify-content: ${justify};\n`;
    css += `  align-items: center;\n`;
  }

  css += `}`;

  document.getElementById('css-output').value = css;
  updatePreviewStyles(bg, color, fontSize, padding, radius, display, justify);
}

function updatePreviewStyles(bg, color, fontSize, padding, radius, display, justify) {
  const box = document.getElementById('css-preview-box');
  box.style.backgroundColor = bg;
  box.style.color = color;
  box.style.fontSize = `${fontSize}px`;
  box.style.padding = `${padding}px`;
  box.style.borderRadius = `${radius}px`;
  box.style.display = display;
  if (display === 'flex') {
    box.style.justifyContent = justify;
    box.style.alignItems = 'center';
  }
}

// Initialize
updateCSS();

// Snippets Integration
function getCSSState() {
  return {
    selector: document.getElementById('css-selector').value,
    bg: document.getElementById('css-bg').value,
    color: document.getElementById('css-color').value,
    fontSize: document.getElementById('css-fontsize').value,
    padding: document.getElementById('css-padding').value,
    radius: document.getElementById('css-radius').value,
    display: document.getElementById('css-display').value,
    justify: document.getElementById('css-justify').value
  };
}

function setCSSState(data) {
  if (!data) return;
  document.getElementById('css-selector').value = data.selector || '.my-element';
  document.getElementById('css-bg').value = data.bg || '#3498db';
  document.getElementById('css-color').value = data.color || '#ffffff';
  document.getElementById('css-fontsize').value = data.fontSize || 16;
  document.getElementById('css-padding').value = data.padding || 10;
  document.getElementById('css-radius').value = data.radius || 4;
  document.getElementById('css-display').value = data.display || 'block';
  document.getElementById('css-justify').value = data.justify || 'flex-start';

  updateCSS();
}

initSnippets('css-builder', getCSSState, setCSSState);

