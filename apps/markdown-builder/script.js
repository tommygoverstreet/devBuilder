function updateMarkdownPreview() {
  const input = document.getElementById('md-input').value;
  const preview = document.getElementById('md-preview');
  // Using marked library if available, otherwise simple fallback
  if (typeof marked !== 'undefined') {
    preview.innerHTML = marked.parse(input);
  } else {
    preview.innerHTML = '<p>Marked library not loaded.</p>';
  }
}

function insertMarkdown(start, end) {
  const textarea = document.getElementById('md-input');
  const startPos = textarea.selectionStart;
  const endPos = textarea.selectionEnd;
  const text = textarea.value;
  const selection = text.substring(startPos, endPos);

  const newText = text.substring(0, startPos) + start + selection + end + text.substring(endPos);
  textarea.value = newText;
  textarea.focus();
  textarea.selectionStart = startPos + start.length;
  textarea.selectionEnd = endPos + start.length; // Keep cursor inside if no selection

  updateMarkdownPreview();
}

function exportHTML() {
  const html = document.getElementById('md-preview').innerHTML;
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'document.html';
  a.click();
  URL.revokeObjectURL(url);
}

// Snippets Integration
function getMarkdownState() {
  return {
    content: document.getElementById('md-input').value
  };
}

function setMarkdownState(data) {
  if (!data) return;
  document.getElementById('md-input').value = data.content || '';
  updateMarkdownPreview();
}

initSnippets('markdown-builder', getMarkdownState, setMarkdownState);

// Initialize
updateMarkdownPreview();

