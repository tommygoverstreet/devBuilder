mermaid.initialize({ startOnLoad: true });

function updateMermaidPreview() {
  const input = document.getElementById('mermaid-input').value;
  const preview = document.getElementById('mermaid-preview');
  preview.innerHTML = input;
  preview.removeAttribute('data-processed');

  try {
    mermaid.init(undefined, preview);
  } catch (e) {
    preview.innerHTML = `<div style="color:red">Syntax Error: ${e.message}</div>`;
  }
}

function loadMermaidTemplate() {
  const type = document.getElementById('mermaid-template').value;
  const input = document.getElementById('mermaid-input');
  let code = '';

  switch (type) {
    case 'flowchart':
      code = `graph TD\n    A[Start] --> B{Is it?}\n    B -- Yes --> C[OK]\n    C --> D[Rethink]\n    D --> B\n    B -- No --> E[End]`;
      break;
    case 'sequence':
      code = `sequenceDiagram\n    Alice->>John: Hello John, how are you?\n    John-->>Alice: Great!\n    Alice-)John: See you later!`;
      break;
    case 'class':
      code = `classDiagram\n    Animal <|-- Duck\n    Animal <|-- Fish\n    Animal <|-- Zebra\n    Animal : +int age\n    Animal : +String gender\n    Animal: +isMammal()\n    Animal: +mate()`;
      break;
    case 'state':
      code = `stateDiagram-v2\n    [*] --> Still\n    Still --> [*]\n    Still --> Moving\n    Moving --> Still\n    Moving --> Crash\n    Crash --> [*]`;
      break;
    case 'gantt':
      code = `gantt\n    title A Gantt Diagram\n    dateFormat  YYYY-MM-DD\n    section Section\n    A task           :a1, 2014-01-01, 30d\n    Another task     :after a1  , 20d`;
      break;
    case 'pie':
      code = `pie title Pets adopted by volunteers\n    "Dogs" : 386\n    "Cats" : 85\n    "Rats" : 15`;
      break;
  }

  if (code) {
    input.value = code;
    updateMermaidPreview();
  }
}

function downloadSVG() {
  const svg = document.querySelector('#mermaid-preview svg');
  if (!svg) {
    alert('No diagram to download');
    return;
  }
  const svgData = new XMLSerializer().serializeToString(svg);
  const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'diagram.svg';
  a.click();
  URL.revokeObjectURL(url);
}

// Snippets Integration
function getMermaidState() {
  return {
    content: document.getElementById('mermaid-input').value
  };
}

function setMermaidState(data) {
  if (!data) return;
  document.getElementById('mermaid-input').value = data.content || '';
  updateMermaidPreview();
}

initSnippets('mermaid-builder', getMermaidState, setMermaidState);

// Initialize
updateMermaidPreview();

