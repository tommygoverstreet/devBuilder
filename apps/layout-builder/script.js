let currentMode = 'grid';

function switchLayoutMode(mode) {
  currentMode = mode;

  // Update Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(mode === 'grid' ? 'grid' : 'flex')) {
      btn.classList.add('active');
    }
  });

  // Toggle Controls
  document.getElementById('grid-controls').style.display = mode === 'grid' ? 'block' : 'none';
  document.getElementById('flex-controls').style.display = mode === 'flex' ? 'block' : 'none';

  updateLayout();
}

function updateLayout() {
  if (currentMode === 'grid') {
    generateGrid();
  } else {
    generateFlex();
  }
}

function generateGrid() {
  const cols = document.getElementById('grid-cols').value;
  const rows = document.getElementById('grid-rows').value;
  const gap = document.getElementById('grid-gap').value;
  const justifyItems = document.getElementById('grid-justify-items').value;
  const alignItems = document.getElementById('grid-align-items').value;

  const preview = document.getElementById('layout-preview');
  const output = document.getElementById('layout-output');

  // Reset Preview Style
  preview.removeAttribute('style');
  preview.className = 'layout-preview-box'; // Reset class

  // Apply Grid Styles
  preview.style.display = 'grid';
  preview.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  preview.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  preview.style.gap = `${gap}px`;
  preview.style.justifyItems = justifyItems;
  preview.style.alignItems = alignItems;

  // Generate Items
  preview.innerHTML = '';
  for (let i = 0; i < cols * rows; i++) {
    const div = document.createElement('div');
    div.className = 'grid-item';
    div.textContent = i + 1;
    preview.appendChild(div);
  }

  // Generate Code
  const css = `.container {
  display: grid;
  grid-template-columns: repeat(${cols}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);
  gap: ${gap}px;
  justify-items: ${justifyItems};
  align-items: ${alignItems};
}`;
  output.value = css;
}

function generateFlex() {
  const direction = document.getElementById('flex-direction').value;
  const wrap = document.getElementById('flex-wrap').value;
  const justify = document.getElementById('flex-justify').value;
  const align = document.getElementById('flex-align').value;
  const alignContent = document.getElementById('flex-align-content').value;
  const gap = document.getElementById('flex-gap').value;
  const items = document.getElementById('flex-items').value;

  const preview = document.getElementById('layout-preview');
  const output = document.getElementById('layout-output');

  // Reset Preview Style
  preview.removeAttribute('style');
  preview.className = 'layout-preview-box';

  // Apply Flex Styles
  preview.style.display = 'flex';
  preview.style.flexDirection = direction;
  preview.style.flexWrap = wrap;
  preview.style.justifyContent = justify;
  preview.style.alignItems = align;
  preview.style.alignContent = alignContent;
  preview.style.gap = `${gap}px`;

  // Generate Items
  preview.innerHTML = '';
  for (let i = 0; i < items; i++) {
    const div = document.createElement('div');
    div.className = 'flex-item';
    div.textContent = i + 1;
    preview.appendChild(div);
  }

  // Generate Code
  const css = `.container {
  display: flex;
  flex-direction: ${direction};
  flex-wrap: ${wrap};
  justify-content: ${justify};
  align-items: ${align};
  align-content: ${alignContent};
  gap: ${gap}px;
}`;
  output.value = css;
}

// Initialize
updateLayout();

// Snippets Integration
function getLayoutState() {
  const state = {
    mode: currentMode
  };

  if (currentMode === 'grid') {
    state.grid = {
      cols: document.getElementById('grid-cols').value,
      rows: document.getElementById('grid-rows').value,
      gap: document.getElementById('grid-gap').value,
      justifyItems: document.getElementById('grid-justify-items').value,
      alignItems: document.getElementById('grid-align-items').value
    };
  } else {
    state.flex = {
      direction: document.getElementById('flex-direction').value,
      wrap: document.getElementById('flex-wrap').value,
      justify: document.getElementById('flex-justify').value,
      align: document.getElementById('flex-align').value,
      alignContent: document.getElementById('flex-align-content').value,
      gap: document.getElementById('flex-gap').value,
      items: document.getElementById('flex-items').value
    };
  }
  return state;
}

function setLayoutState(data) {
  if (!data) return;

  if (data.mode) {
    switchLayoutMode(data.mode);
  }

  if (data.mode === 'grid' && data.grid) {
    document.getElementById('grid-cols').value = data.grid.cols || 3;
    document.getElementById('grid-rows').value = data.grid.rows || 3;
    document.getElementById('grid-gap').value = data.grid.gap || 10;
    document.getElementById('grid-justify-items').value = data.grid.justifyItems || 'stretch';
    document.getElementById('grid-align-items').value = data.grid.alignItems || 'stretch';
  } else if (data.mode === 'flex' && data.flex) {
    document.getElementById('flex-direction').value = data.flex.direction || 'row';
    document.getElementById('flex-wrap').value = data.flex.wrap || 'nowrap';
    document.getElementById('flex-justify').value = data.flex.justify || 'flex-start';
    document.getElementById('flex-align').value = data.flex.align || 'stretch';
    document.getElementById('flex-align-content').value = data.flex.alignContent || 'stretch';
    document.getElementById('flex-gap').value = data.flex.gap || 10;
    document.getElementById('flex-items').value = data.flex.items || 5;
  }

  updateLayout();
}

initSnippets('layout-builder', getLayoutState, setLayoutState);

