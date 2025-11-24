async function sendRequest() {
  const method = document.getElementById('http-method').value;
  const url = document.getElementById('http-url').value;
  const headersStr = document.getElementById('http-headers').value;
  const bodyStr = document.getElementById('http-body').value;
  const responseArea = document.getElementById('http-response');
  const statusBadge = document.getElementById('http-status');

  responseArea.value = 'Loading...';
  statusBadge.textContent = '';
  statusBadge.style.backgroundColor = 'transparent';

  try {
    let headers = {};
    if (headersStr) {
      headers = JSON.parse(headersStr);
    }

    let options = {
      method,
      headers
    };

    if (method !== 'GET' && method !== 'HEAD' && bodyStr) {
      options.body = bodyStr;
    }

    const response = await fetch(url, options);
    const data = await response.text();

    statusBadge.textContent = `${response.status} ${response.statusText}`;
    statusBadge.style.backgroundColor = response.ok ? '#2ecc71' : '#e74c3c';
    statusBadge.style.color = '#fff';

    try {
      responseArea.value = JSON.stringify(JSON.parse(data), null, 2);
    } catch (e) {
      responseArea.value = data;
    }

  } catch (error) {
    responseArea.value = `Error: ${error.message}`;
    statusBadge.textContent = 'Error';
    statusBadge.style.backgroundColor = '#e74c3c';
    statusBadge.style.color = '#fff';
  }
}

function switchTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

  document.getElementById(`tab-${tabName}`).classList.add('active');

  // Update buttons active state
  const buttons = document.querySelectorAll('.tab-btn');
  if (tabName === 'headers') buttons[0].classList.add('active');
  else if (tabName === 'body') buttons[1].classList.add('active');
  else if (tabName === 'auth') buttons[2].classList.add('active');
}

function updateAuthHeader() {
  const token = document.getElementById('http-token').value;
  const headersArea = document.getElementById('http-headers');
  let headers = {};
  try {
    headers = JSON.parse(headersArea.value || '{}');
  } catch (e) { }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  } else {
    delete headers['Authorization'];
  }

  headersArea.value = JSON.stringify(headers, null, 2);
}

// Snippets Integration
function getHTTPState() {
  return {
    method: document.getElementById('http-method').value,
    url: document.getElementById('http-url').value,
    headers: document.getElementById('http-headers').value,
    body: document.getElementById('http-body').value,
    token: document.getElementById('http-token').value
  };
}

function setHTTPState(data) {
  if (!data) return;
  document.getElementById('http-method').value = data.method || 'GET';
  document.getElementById('http-url').value = data.url || '';
  document.getElementById('http-headers').value = data.headers || '';
  document.getElementById('http-body').value = data.body || '';
  document.getElementById('http-token').value = data.token || '';
}

initSnippets('http-builder', getHTTPState, setHTTPState);

