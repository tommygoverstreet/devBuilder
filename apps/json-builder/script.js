function formatJSON() {
  const input = document.getElementById('json-input');
  const status = document.getElementById('json-status');
  try {
    const json = JSON.parse(input.value);
    input.value = JSON.stringify(json, null, 2);
    status.textContent = 'Valid JSON';
    status.className = 'status-bar status-success';
  } catch (e) {
    status.textContent = `Invalid JSON: ${e.message}`;
    status.className = 'status-bar status-error';
  }
}

function minifyJSON() {
  const input = document.getElementById('json-input');
  const status = document.getElementById('json-status');
  try {
    const json = JSON.parse(input.value);
    input.value = JSON.stringify(json);
    status.textContent = 'Valid JSON (Minified)';
    status.className = 'status-bar status-success';
  } catch (e) {
    status.textContent = `Invalid JSON: ${e.message}`;
    status.className = 'status-bar status-error';
  }
}
