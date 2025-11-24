function generateSQL() {
  const op = document.querySelector('input[name="sql-op"]:checked').value;
  const table = document.getElementById('sql-table').value || 'table_name';
  const columns = document.getElementById('sql-columns').value || '*';
  const whereCol = document.getElementById('sql-where-col').value;
  const whereOp = document.getElementById('sql-where-op').value;
  const whereVal = document.getElementById('sql-where-val').value;

  const joinType = document.getElementById('sql-join-type').value;
  const joinTable = document.getElementById('sql-join-table').value;
  const joinOn = document.getElementById('sql-join-on').value;

  let sql = '';

  switch (op) {
    case 'SELECT':
      sql = `SELECT ${columns} FROM ${table}`;
      if (joinType && joinTable && joinOn) {
        sql += `\n${joinType} ${joinTable} ON ${joinOn}`;
      }
      break;
    case 'INSERT':
      const cols = columns === '*' ? 'col1, col2' : columns;
      const vals = cols.split(',').map(() => '?').join(', ');
      sql = `INSERT INTO ${table} (${cols}) VALUES (${vals})`;
      break;
    case 'UPDATE':
      sql = `UPDATE ${table} SET column = 'value'`;
      break;
    case 'DELETE':
      sql = `DELETE FROM ${table}`;
      break;
  }

  if (whereCol && whereVal) {
    sql += `\nWHERE ${whereCol} ${whereOp} '${whereVal}'`;
  }

  sql += ';';
  document.getElementById('sql-output').value = sql;
}

// Toggle columns input based on operation
document.querySelectorAll('input[name="sql-op"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    const colGroup = document.getElementById('sql-columns-group');
    const joinGroup = document.getElementById('sql-join-group');

    if (e.target.value === 'DELETE') {
      colGroup.style.display = 'none';
      joinGroup.style.display = 'none';
    } else if (e.target.value === 'SELECT') {
      colGroup.style.display = 'block';
      joinGroup.style.display = 'block';
    } else {
      colGroup.style.display = 'block';
      joinGroup.style.display = 'none';
    }
  });
});

// Snippets Integration
function getSQLState() {
  return {
    op: document.querySelector('input[name="sql-op"]:checked').value,
    table: document.getElementById('sql-table').value,
    columns: document.getElementById('sql-columns').value,
    joinType: document.getElementById('sql-join-type').value,
    joinTable: document.getElementById('sql-join-table').value,
    joinOn: document.getElementById('sql-join-on').value,
    whereCol: document.getElementById('sql-where-col').value,
    whereOp: document.getElementById('sql-where-op').value,
    whereVal: document.getElementById('sql-where-val').value
  };
}

function setSQLState(data) {
  if (!data) return;
  const radio = document.querySelector(`input[name="sql-op"][value="${data.op}"]`);
  if (radio) {
    radio.checked = true;
    radio.dispatchEvent(new Event('change'));
  }
  document.getElementById('sql-table').value = data.table || '';
  document.getElementById('sql-columns').value = data.columns || '*';
  document.getElementById('sql-join-type').value = data.joinType || '';
  document.getElementById('sql-join-table').value = data.joinTable || '';
  document.getElementById('sql-join-on').value = data.joinOn || '';
  document.getElementById('sql-where-col').value = data.whereCol || '';
  document.getElementById('sql-where-op').value = data.whereOp || '=';
  document.getElementById('sql-where-val').value = data.whereVal || '';
  generateSQL();
}

initSnippets('sql-builder', getSQLState, setSQLState);

