function generateHTML() {
  const tag = document.getElementById('html-tag').value;
  const classes = document.getElementById('html-classes').value;
  const id = document.getElementById('html-id').value;
  const content = document.getElementById('html-content').value;
  const attrs = document.getElementById('html-attrs').value;

  let classStr = classes ? ` class="${classes}"` : '';
  let idStr = id ? ` id="${id}"` : '';
  let attrStr = attrs ? ` ${attrs}` : '';

  let code = '';

  if (tag === 'input') {
    code = `<input type="text"${classStr}${idStr}${attrStr} placeholder="${content}">`;
  } else if (tag === 'ul') {
    code = `<ul${classStr}${idStr}${attrStr}>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>`;
  } else if (tag === 'table') {
    code = `<table${classStr}${idStr}${attrStr}>\n  <thead>\n    <tr>\n      <th>Header 1</th>\n      <th>Header 2</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Data 1</td>\n      <td>Data 2</td>\n    </tr>\n  </tbody>\n</table>`;
  } else if (tag === 'img') {
    code = `<img src="${content || 'image.jpg'}" alt="Description"${classStr}${idStr}${attrStr}>`;
  } else if (tag === 'a') {
    code = `<a href="#"${classStr}${idStr}${attrStr}>${content || 'Link'}</a>`;
  } else if (tag === 'textarea') {
    code = `<textarea${classStr}${idStr}${attrStr}>${content}</textarea>`;
  } else {
    code = `<${tag}${classStr}${idStr}${attrStr}>${content}</${tag}>`;
  }

  document.getElementById('html-output').value = code;
  updateHTMLLivePreview();
}

function updateHTMLLivePreview() {
  const code = document.getElementById('html-output').value;
  document.getElementById('html-live-preview').innerHTML = code;
}

// Snippets Integration
function getHTMLState() {
  return {
    tag: document.getElementById('html-tag').value,
    classes: document.getElementById('html-classes').value,
    id: document.getElementById('html-id').value,
    content: document.getElementById('html-content').value,
    attrs: document.getElementById('html-attrs').value
  };
}

function setHTMLState(data) {
  if (!data) return;
  document.getElementById('html-tag').value = data.tag || 'div';
  document.getElementById('html-classes').value = data.classes || '';
  document.getElementById('html-id').value = data.id || '';
  document.getElementById('html-content').value = data.content || '';
  document.getElementById('html-attrs').value = data.attrs || '';
  generateHTML();
}

initSnippets('html-builder', getHTMLState, setHTMLState);

