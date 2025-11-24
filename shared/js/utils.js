// Shared Utilities

function copyToClipboard(elementId) {
  const element = document.getElementById(elementId);
  const text = element.value || element.textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert('Code copied to clipboard!');
  });
}

// Cheatsheet Data
const cheatsheets = {
  mermaid: `
        <div class="cheatsheet-section">
            <h3>Flowchart</h3>
            <table class="cheatsheet-table">
                <tr><th>Syntax</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">graph TD</span></td><td>Top-Down direction</td></tr>
                <tr><td><span class="cheatsheet-code">A --> B</span></td><td>Arrow link</td></tr>
                <tr><td><span class="cheatsheet-code">A[Text]</span></td><td>Rectangle node</td></tr>
                <tr><td><span class="cheatsheet-code">B(Text)</span></td><td>Rounded node</td></tr>
                <tr><td><span class="cheatsheet-code">C{Text}</span></td><td>Rhombus node</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Sequence Diagram</h3>
            <table class="cheatsheet-table">
                <tr><th>Syntax</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">sequenceDiagram</span></td><td>Start sequence</td></tr>
                <tr><td><span class="cheatsheet-code">A->>B: Text</span></td><td>Solid line arrow</td></tr>
                <tr><td><span class="cheatsheet-code">B-->>A: Text</span></td><td>Dotted line arrow</td></tr>
                <tr><td><span class="cheatsheet-code">Note right of A: Text</span></td><td>Note</td></tr>
            </table>
        </div>
    `,
  php: `
        <div class="cheatsheet-section">
            <h3>Variables & Types</h3>
            <table class="cheatsheet-table">
                <tr><th>Syntax</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">$var = "value";</span></td><td>String variable</td></tr>
                <tr><td><span class="cheatsheet-code">$int = 123;</span></td><td>Integer variable</td></tr>
                <tr><td><span class="cheatsheet-code">$float = 1.5;</span></td><td>Float variable</td></tr>
                <tr><td><span class="cheatsheet-code">$bool = true;</span></td><td>Boolean variable</td></tr>
                <tr><td><span class="cheatsheet-code">$arr = [1, 2, 3];</span></td><td>Array definition</td></tr>
                <tr><td><span class="cheatsheet-code">$assoc = ['k' => 'v'];</span></td><td>Associative Array</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Functions</h3>
            <table class="cheatsheet-table">
                <tr><th>Syntax</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">function name($arg) { ... }</span></td><td>Function declaration</td></tr>
                <tr><td><span class="cheatsheet-code">return $val;</span></td><td>Return value</td></tr>
                <tr><td><span class="cheatsheet-code">function($x) use ($y) { ... }</span></td><td>Closure with scope</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Control Structures</h3>
            <table class="cheatsheet-table">
                <tr><th>Syntax</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">if ($cond) { ... } else { ... }</span></td><td>Conditional</td></tr>
                <tr><td><span class="cheatsheet-code">foreach ($arr as $k => $v)</span></td><td>Loop through array</td></tr>
                <tr><td><span class="cheatsheet-code">try { ... } catch (Exception $e)</span></td><td>Error handling</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Common Functions</h3>
            <table class="cheatsheet-table">
                <tr><th>Function</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">echo "text";</span></td><td>Output text</td></tr>
                <tr><td><span class="cheatsheet-code">count($arr);</span></td><td>Count array items</td></tr>
                <tr><td><span class="cheatsheet-code">implode(", ", $arr);</span></td><td>Join array to string</td></tr>
                <tr><td><span class="cheatsheet-code">explode(", ", $str);</span></td><td>Split string to array</td></tr>
                <tr><td><span class="cheatsheet-code">json_encode($data);</span></td><td>Convert to JSON</td></tr>
            </table>
        </div>
    `,
  sql: `
        <div class="cheatsheet-section">
            <h3>Basic Queries</h3>
            <table class="cheatsheet-table">
                <tr><th>Query</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">SELECT * FROM table;</span></td><td>Select all columns</td></tr>
                <tr><td><span class="cheatsheet-code">SELECT col1, col2 FROM table;</span></td><td>Select specific columns</td></tr>
                <tr><td><span class="cheatsheet-code">INSERT INTO table (col) VALUES (val);</span></td><td>Insert data</td></tr>
                <tr><td><span class="cheatsheet-code">UPDATE table SET col=val WHERE id=1;</span></td><td>Update data</td></tr>
                <tr><td><span class="cheatsheet-code">DELETE FROM table WHERE id=1;</span></td><td>Delete data</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Filtering & Sorting</h3>
            <table class="cheatsheet-table">
                <tr><th>Clause</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">WHERE col = 'val'</span></td><td>Filter rows</td></tr>
                <tr><td><span class="cheatsheet-code">WHERE col LIKE '%val%'</span></td><td>Pattern matching</td></tr>
                <tr><td><span class="cheatsheet-code">ORDER BY col ASC|DESC</span></td><td>Sort results</td></tr>
                <tr><td><span class="cheatsheet-code">LIMIT 10</span></td><td>Limit number of results</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Joins</h3>
            <table class="cheatsheet-table">
                <tr><th>Type</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">INNER JOIN</span></td><td>Returns matching records in both tables</td></tr>
                <tr><td><span class="cheatsheet-code">LEFT JOIN</span></td><td>Returns all from left, matches from right</td></tr>
                <tr><td><span class="cheatsheet-code">RIGHT JOIN</span></td><td>Returns all from right, matches from left</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Aggregation</h3>
            <table class="cheatsheet-table">
                <tr><th>Function</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">COUNT(*)</span></td><td>Count rows</td></tr>
                <tr><td><span class="cheatsheet-code">SUM(col)</span></td><td>Sum values</td></tr>
                <tr><td><span class="cheatsheet-code">AVG(col)</span></td><td>Average value</td></tr>
                <tr><td><span class="cheatsheet-code">GROUP BY col</span></td><td>Group results</td></tr>
            </table>
        </div>
    `,
  js: `
        <div class="cheatsheet-section">
            <h3>Variables</h3>
            <table class="cheatsheet-table">
                <tr><th>Syntax</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">const x = 1;</span></td><td>Constant (cannot reassign)</td></tr>
                <tr><td><span class="cheatsheet-code">let y = 2;</span></td><td>Block-scoped variable</td></tr>
                <tr><td><span class="cheatsheet-code">var z = 3;</span></td><td>Function-scoped (avoid)</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Arrays</h3>
            <table class="cheatsheet-table">
                <tr><th>Method</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">.map(fn)</span></td><td>Transform elements</td></tr>
                <tr><td><span class="cheatsheet-code">.filter(fn)</span></td><td>Filter elements</td></tr>
                <tr><td><span class="cheatsheet-code">.reduce(fn, init)</span></td><td>Reduce to single value</td></tr>
                <tr><td><span class="cheatsheet-code">.push(item)</span></td><td>Add to end</td></tr>
                <tr><td><span class="cheatsheet-code">.pop()</span></td><td>Remove from end</td></tr>
                <tr><td><span class="cheatsheet-code">.includes(item)</span></td><td>Check existence</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>DOM Manipulation</h3>
            <table class="cheatsheet-table">
                <tr><th>Method</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">document.getElementById('id')</span></td><td>Select by ID</td></tr>
                <tr><td><span class="cheatsheet-code">document.querySelector('.class')</span></td><td>Select first match</td></tr>
                <tr><td><span class="cheatsheet-code">el.addEventListener('click', fn)</span></td><td>Add event listener</td></tr>
                <tr><td><span class="cheatsheet-code">el.innerHTML = 'html'</span></td><td>Set HTML content</td></tr>
                <tr><td><span class="cheatsheet-code">el.classList.add('class')</span></td><td>Add CSS class</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Async / Await</h3>
            <table class="cheatsheet-table">
                <tr><th>Syntax</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">async function foo() { ... }</span></td><td>Define async function</td></tr>
                <tr><td><span class="cheatsheet-code">const data = await fetch(url);</span></td><td>Wait for promise</td></tr>
                <tr><td><span class="cheatsheet-code">.then(res => ...).catch(err => ...)</span></td><td>Promise chain</td></tr>
            </table>
        </div>
    `,
  html: `
        <div class="cheatsheet-section">
            <h3>Document Structure</h3>
            <table class="cheatsheet-table">
                <tr><th>Tag</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">&lt;!DOCTYPE html&gt;</span></td><td>HTML5 declaration</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;html&gt;</span></td><td>Root element</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;head&gt;</span></td><td>Metadata container</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;body&gt;</span></td><td>Content container</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;meta charset="UTF-8"&gt;</span></td><td>Character encoding</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Text Formatting</h3>
            <table class="cheatsheet-table">
                <tr><th>Tag</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">&lt;p&gt;</span></td><td>Paragraph</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;h1&gt; to &lt;h6&gt;</span></td><td>Headings</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;strong&gt;</span></td><td>Bold text</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;em&gt;</span></td><td>Italic text</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;span&gt;</span></td><td>Inline container</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;br&gt;</span></td><td>Line break</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Forms</h3>
            <table class="cheatsheet-table">
                <tr><th>Tag</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">&lt;form&gt;</span></td><td>Form container</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;input type="text"&gt;</span></td><td>Text input</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;input type="checkbox"&gt;</span></td><td>Checkbox</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;select&gt; &lt;option&gt;</span></td><td>Dropdown menu</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;button&gt;</span></td><td>Clickable button</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;label&gt;</span></td><td>Input label</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Semantic HTML</h3>
            <table class="cheatsheet-table">
                <tr><th>Tag</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">&lt;header&gt;</span></td><td>Introductory content</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;nav&gt;</span></td><td>Navigation links</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;main&gt;</span></td><td>Main content</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;article&gt;</span></td><td>Self-contained content</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;section&gt;</span></td><td>Thematic grouping</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;footer&gt;</span></td><td>Footer content</td></tr>
            </table>
        </div>
    `,
  css: `
        <div class="cheatsheet-section">
            <h3>Selectors</h3>
            <table class="cheatsheet-table">
                <tr><th>Selector</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">.class</span></td><td>Class selector</td></tr>
                <tr><td><span class="cheatsheet-code">#id</span></td><td>ID selector</td></tr>
                <tr><td><span class="cheatsheet-code">element</span></td><td>Tag selector</td></tr>
                <tr><td><span class="cheatsheet-code">*</span></td><td>Universal selector</td></tr>
                <tr><td><span class="cheatsheet-code">el:hover</span></td><td>Hover state</td></tr>
                <tr><td><span class="cheatsheet-code">el:first-child</span></td><td>First child</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Box Model</h3>
            <table class="cheatsheet-table">
                <tr><th>Property</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">width / height</span></td><td>Dimensions</td></tr>
                <tr><td><span class="cheatsheet-code">padding</span></td><td>Inner spacing</td></tr>
                <tr><td><span class="cheatsheet-code">margin</span></td><td>Outer spacing</td></tr>
                <tr><td><span class="cheatsheet-code">border</span></td><td>Border style</td></tr>
                <tr><td><span class="cheatsheet-code">box-sizing: border-box;</span></td><td>Include padding in width</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Flexbox</h3>
            <table class="cheatsheet-table">
                <tr><th>Property</th><th>Values</th></tr>
                <tr><td><span class="cheatsheet-code">display</span></td><td>flex</td></tr>
                <tr><td><span class="cheatsheet-code">flex-direction</span></td><td>row, column</td></tr>
                <tr><td><span class="cheatsheet-code">justify-content</span></td><td>center, space-between, flex-start</td></tr>
                <tr><td><span class="cheatsheet-code">align-items</span></td><td>center, stretch, flex-start</td></tr>
                <tr><td><span class="cheatsheet-code">flex-wrap</span></td><td>wrap, nowrap</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Grid</h3>
            <table class="cheatsheet-table">
                <tr><th>Property</th><th>Values</th></tr>
                <tr><td><span class="cheatsheet-code">display</span></td><td>grid</td></tr>
                <tr><td><span class="cheatsheet-code">grid-template-columns</span></td><td>1fr 1fr, repeat(3, 1fr)</td></tr>
                <tr><td><span class="cheatsheet-code">gap</span></td><td>20px</td></tr>
            </table>
        </div>
    `,
  json: `
        <div class="cheatsheet-section">
            <h3>Data Types</h3>
            <table class="cheatsheet-table">
                <tr><th>Type</th><th>Example</th></tr>
                <tr><td>String</td><td><span class="cheatsheet-code">"hello"</span></td></tr>
                <tr><td>Number</td><td><span class="cheatsheet-code">123.45</span></td></tr>
                <tr><td>Boolean</td><td><span class="cheatsheet-code">true</span></td></tr>
                <tr><td>Null</td><td><span class="cheatsheet-code">null</span></td></tr>
                <tr><td>Array</td><td><span class="cheatsheet-code">[1, 2, 3]</span></td></tr>
                <tr><td>Object</td><td><span class="cheatsheet-code">{"key": "value"}</span></td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Syntax Rules</h3>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Keys must be double-quoted strings: <span class="cheatsheet-code">"key"</span></li>
                <li>Strings must use double quotes: <span class="cheatsheet-code">"value"</span></li>
                <li>No trailing commas allowed in arrays or objects</li>
                <li>No comments allowed in standard JSON</li>
            </ul>
        </div>
    `,
  react: `
        <div class="cheatsheet-section">
            <h3>Hooks</h3>
            <table class="cheatsheet-table">
                <tr><th>Hook</th><th>Usage</th></tr>
                <tr><td><span class="cheatsheet-code">useState</span></td><td>State management</td></tr>
                <tr><td><span class="cheatsheet-code">useEffect</span></td><td>Side effects (lifecycle)</td></tr>
                <tr><td><span class="cheatsheet-code">useContext</span></td><td>Context API consumption</td></tr>
                <tr><td><span class="cheatsheet-code">useRef</span></td><td>Mutable references</td></tr>
                <tr><td><span class="cheatsheet-code">useMemo</span></td><td>Memoize values</td></tr>
                <tr><td><span class="cheatsheet-code">useCallback</span></td><td>Memoize functions</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>JSX Rules</h3>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Return a single parent element (or Fragment <span class="cheatsheet-code">&lt;&gt;...&lt;/&gt;</span>)</li>
                <li>Use <span class="cheatsheet-code">className</span> instead of class</li>
                <li>Close all tags (e.g. <span class="cheatsheet-code">&lt;img /&gt;</span>)</li>
                <li>Use camelCase for attributes (e.g. <span class="cheatsheet-code">onClick</span>)</li>
                <li>Embed JS with curly braces: <span class="cheatsheet-code">{variable}</span></li>
            </ul>
        </div>
        <div class="cheatsheet-section">
            <h3>Component Lifecycle (Functional)</h3>
            <table class="cheatsheet-table">
                <tr><th>Stage</th><th>Hook Equivalent</th></tr>
                <tr><td>Mount</td><td><span class="cheatsheet-code">useEffect(() => {}, [])</span></td></tr>
                <tr><td>Update</td><td><span class="cheatsheet-code">useEffect(() => {})</span></td></tr>
                <tr><td>Unmount</td><td><span class="cheatsheet-code">useEffect(() => { return () => cleanup }, [])</span></td></tr>
            </table>
        </div>
    `,
  markdown: `
        <div class="cheatsheet-section">
            <h3>Syntax</h3>
            <table class="cheatsheet-table">
                <tr><th>Element</th><th>Syntax</th></tr>
                <tr><td>Heading</td><td><span class="cheatsheet-code"># H1, ## H2</span></td></tr>
                <tr><td>Bold</td><td><span class="cheatsheet-code">**text**</span></td></tr>
                <tr><td>Italic</td><td><span class="cheatsheet-code">*text*</span></td></tr>
                <tr><td>Link</td><td><span class="cheatsheet-code">[text](url)</span></td></tr>
                <tr><td>Image</td><td><span class="cheatsheet-code">![alt](url)</span></td></tr>
                <tr><td>Code</td><td><span class="cheatsheet-code">\`code\`</span></td></tr>
                <tr><td>Blockquote</td><td><span class="cheatsheet-code">> text</span></td></tr>
                <tr><td>List (Unordered)</td><td><span class="cheatsheet-code">- item</span></td></tr>
                <tr><td>List (Ordered)</td><td><span class="cheatsheet-code">1. item</span></td></tr>
                <tr><td>Horizontal Rule</td><td><span class="cheatsheet-code">---</span></td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Code Blocks</h3>
            <pre style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px;">\`\`\`javascript
console.log("Hello");
\`\`\`</pre>
        </div>
        <div class="cheatsheet-section">
            <h3>Tables</h3>
            <pre style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px;">| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |</pre>
        </div>
    `,
  swift: `
        <div class="cheatsheet-section">
            <h3>Variables</h3>
            <table class="cheatsheet-table">
                <tr><th>Syntax</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">var x = 10</span></td><td>Variable (mutable)</td></tr>
                <tr><td><span class="cheatsheet-code">let y = 20</span></td><td>Constant (immutable)</td></tr>
                <tr><td><span class="cheatsheet-code">var s: String = "Hi"</span></td><td>Explicit type</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Control Flow</h3>
            <table class="cheatsheet-table">
                <tr><th>Syntax</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">if condition { }</span></td><td>If statement</td></tr>
                <tr><td><span class="cheatsheet-code">for i in 1...5 { }</span></td><td>For loop (inclusive)</td></tr>
                <tr><td><span class="cheatsheet-code">while condition { }</span></td><td>While loop</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Functions</h3>
            <table class="cheatsheet-table">
                <tr><th>Syntax</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">func name() { }</span></td><td>Function definition</td></tr>
                <tr><td><span class="cheatsheet-code">func add(a: Int, b: Int) -> Int</span></td><td>Return type</td></tr>
            </table>
        </div>
    `,
  http: `
        <div class="cheatsheet-section">
            <h3>HTTP Methods</h3>
            <table class="cheatsheet-table">
                <tr><th>Method</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">GET</span></td><td>Retrieve data</td></tr>
                <tr><td><span class="cheatsheet-code">POST</span></td><td>Submit data</td></tr>
                <tr><td><span class="cheatsheet-code">PUT</span></td><td>Update data (replace)</td></tr>
                <tr><td><span class="cheatsheet-code">PATCH</span></td><td>Update data (partial)</td></tr>
                <tr><td><span class="cheatsheet-code">DELETE</span></td><td>Remove data</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Status Codes</h3>
            <table class="cheatsheet-table">
                <tr><th>Code</th><th>Meaning</th></tr>
                <tr><td><span class="cheatsheet-code">200</span></td><td>OK</td></tr>
                <tr><td><span class="cheatsheet-code">201</span></td><td>Created</td></tr>
                <tr><td><span class="cheatsheet-code">400</span></td><td>Bad Request</td></tr>
                <tr><td><span class="cheatsheet-code">401</span></td><td>Unauthorized</td></tr>
                <tr><td><span class="cheatsheet-code">404</span></td><td>Not Found</td></tr>
                <tr><td><span class="cheatsheet-code">500</span></td><td>Internal Server Error</td></tr>
            </table>
        </div>
    `,
  layout: `
        <div class="cheatsheet-section">
            <h3>Flexbox vs Grid</h3>
            <table class="cheatsheet-table">
                <tr><th>Feature</th><th>Flexbox</th><th>Grid</th></tr>
                <tr><td>Dimension</td><td>1D (Row OR Column)</td><td>2D (Rows AND Columns)</td></tr>
                <tr><td>Alignment</td><td>Content-first</td><td>Layout-first</td></tr>
                <tr><td>Overlapping</td><td>Hard</td><td>Easy (z-index)</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Common Patterns</h3>
            <p><strong>Centering:</strong> <code>display: flex; justify-content: center; align-items: center;</code></p>
            <p><strong>Holy Grail:</strong> Grid with header, footer, sidebar, main.</p>
        </div>
    `,
  uiblocks: `
        <div class="cheatsheet-section">
            <h3>Design Principles</h3>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li><strong>Consistency:</strong> Use same colors, fonts, spacing.</li>
                <li><strong>Hierarchy:</strong> Use size and color to show importance.</li>
                <li><strong>Whitespace:</strong> Give elements room to breathe.</li>
                <li><strong>Feedback:</strong> Interactive elements should react to hover/click.</li>
            </ul>
        </div>
    `,
  head: `
        <div class="cheatsheet-section">
            <h3>Meta Tags</h3>
            <table class="cheatsheet-table">
                <tr><th>Tag</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">&lt;meta charset="UTF-8"&gt;</span></td><td>Character encoding</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;meta name="viewport" ...&gt;</span></td><td>Responsive viewport</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;meta name="description" ...&gt;</span></td><td>SEO description</td></tr>
                <tr><td><span class="cheatsheet-code">&lt;meta name="robots" ...&gt;</span></td><td>Crawler instructions</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>Open Graph (OG)</h3>
            <table class="cheatsheet-table">
                <tr><th>Property</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">og:title</span></td><td>Title for social media</td></tr>
                <tr><td><span class="cheatsheet-code">og:description</span></td><td>Description for social media</td></tr>
                <tr><td><span class="cheatsheet-code">og:image</span></td><td>Image URL for preview</td></tr>
                <tr><td><span class="cheatsheet-code">og:url</span></td><td>Canonical URL</td></tr>
            </table>
        </div>
    `,
  colors: `
        <div class="cheatsheet-section">
            <h3>Color Theory</h3>
            <table class="cheatsheet-table">
                <tr><th>Harmony</th><th>Description</th></tr>
                <tr><td><span class="cheatsheet-code">Monochromatic</span></td><td>Variations in lightness/saturation of one hue.</td></tr>
                <tr><td><span class="cheatsheet-code">Analogous</span></td><td>Colors next to each other on the wheel.</td></tr>
                <tr><td><span class="cheatsheet-code">Complementary</span></td><td>Opposite colors on the wheel.</td></tr>
                <tr><td><span class="cheatsheet-code">Triadic</span></td><td>Three colors evenly spaced (triangle).</td></tr>
            </table>
        </div>
        <div class="cheatsheet-section">
            <h3>CSS Color Formats</h3>
            <table class="cheatsheet-table">
                <tr><th>Format</th><th>Example</th></tr>
                <tr><td><span class="cheatsheet-code">Hex</span></td><td>#ff0000</td></tr>
                <tr><td><span class="cheatsheet-code">RGB</span></td><td>rgb(255, 0, 0)</td></tr>
                <tr><td><span class="cheatsheet-code">HSL</span></td><td>hsl(0, 100%, 50%)</td></tr>
                <tr><td><span class="cheatsheet-code">RGBA</span></td><td>rgba(255, 0, 0, 0.5)</td></tr>
            </table>
        </div>
    `
};

function openCheatsheet(type) {
  const modal = document.getElementById('cheatsheet-modal');
  const title = document.getElementById('cheatsheet-title');
  const body = document.getElementById('cheatsheet-body');

  if (modal && title && body) {
    title.textContent = type.toUpperCase() + ' Cheatsheet';
    body.innerHTML = cheatsheets[type] || '<p>No cheatsheet available.</p>';
    modal.style.display = 'block';
  }
}

function closeCheatsheet() {
  const modal = document.getElementById('cheatsheet-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById('cheatsheet-modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

async function loadApps() {
  const isRoot = !window.location.pathname.includes('/apps/');
  const jsonPath = isRoot ? 'shared/apps.json' : '../../shared/apps.json';

  try {
    const response = await fetch(jsonPath);
    const apps = await response.json();

    // Populate Root Grid
    const hubGrid = document.querySelector('.hub-grid');
    if (hubGrid) {
      hubGrid.innerHTML = apps.map(app => `
                <a href="apps/${app.id}/index.html" class="tool-card">
                    <i class="${app.icon} tool-icon"></i>
                    <div class="tool-title">${app.name}</div>
                    <div class="tool-desc">${app.description || 'Generate code.'}</div>
                </a>
            `).join('');
    }

    // Populate Sidebar Links (for apps)
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      // We are in an app, so links should be ../app-id/index.html
      // Highlight current app
      const currentApp = window.location.pathname.split('/').slice(-2, -1)[0]; // e.g. 'css-builder'

      navLinks.innerHTML = apps.map(app => `
                <li>
                    <a href="../${app.id}/index.html" class="${app.id === currentApp ? 'active' : ''}">
                        <i class="${app.icon}"></i> ${app.name}
                    </a>
                </li>
            `).join('');

      // Add Hamburger Menu
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        let hamburger = document.getElementById('nav-hamburger');
        if (!hamburger) {
          const logo = sidebar.querySelector('.logo');
          if (logo) {
            // Create Header Wrapper
            const header = document.createElement('div');
            header.className = 'sidebar-header';

            hamburger = document.createElement('button');
            hamburger.id = 'nav-hamburger';
            hamburger.className = 'hamburger-btn';
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            hamburger.onclick = () => {
              navLinks.classList.toggle('show');
            };

            // Insert header and move logo inside
            logo.parentNode.insertBefore(header, logo);
            header.appendChild(hamburger);
            header.appendChild(logo);
          }
        }
      }
    }

  } catch (e) {
    console.error('Error loading apps:', e);
  }
}

document.addEventListener('DOMContentLoaded', loadApps);

// Snippets Manager Logic
let currentAppId = '';
let getSnippetData = null;
let setSnippetData = null;

function initSnippets(appId, getFn, setFn) {
  currentAppId = appId;
  getSnippetData = getFn;
  setSnippetData = setFn;

  // Inject Modal HTML if not exists
  if (!document.getElementById('snippets-modal')) {
    const modalHtml = `
      <div id="snippets-modal" class="snippets-modal">
        <div class="snippets-content">
          <div class="snippets-header">
            <h2>Saved Snippets</h2>
            <span class="close-modal" onclick="closeSnippetsModal()">&times;</span>
          </div>
          <div class="new-snippet-form">
            <input type="text" id="new-snippet-name" placeholder="Snippet Name">
            <button class="btn-success" onclick="saveSnippet()">Save Current</button>
          </div>
          <ul id="snippet-list" class="snippet-list">
            <!-- Snippets will be loaded here -->
          </ul>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  // Close modal when clicking outside
  window.addEventListener('click', function (event) {
    const modal = document.getElementById('snippets-modal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
}

function openSnippetsModal() {
  const modal = document.getElementById('snippets-modal');
  if (modal) {
    renderSnippetsList();
    modal.style.display = 'block';
  }
}

function closeSnippetsModal() {
  const modal = document.getElementById('snippets-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function getSnippets() {
  const key = `devbuilder_snippets_${currentAppId}`;
  const snippets = localStorage.getItem(key);
  return snippets ? JSON.parse(snippets) : [];
}

function saveSnippets(snippets) {
  const key = `devbuilder_snippets_${currentAppId}`;
  localStorage.setItem(key, JSON.stringify(snippets));
}

function renderSnippetsList() {
  const list = document.getElementById('snippet-list');
  const snippets = getSnippets();

  if (snippets.length === 0) {
    list.innerHTML = '<li style="padding:10px; text-align:center; color:#888;">No snippets saved yet.</li>';
    return;
  }

  list.innerHTML = snippets.map(snippet => `
    <li class="snippet-item">
      <div class="snippet-info" onclick="loadSnippet('${snippet.id}')">
        <span class="snippet-name">${snippet.name}</span>
        <span class="snippet-date">${new Date(snippet.timestamp).toLocaleString()}</span>
      </div>
      <div class="snippet-actions">
        <button class="btn-primary" onclick="loadSnippet('${snippet.id}')">Load</button>
        <button class="btn-danger" onclick="deleteSnippet('${snippet.id}')">Delete</button>
      </div>
    </li>
  `).join('');
}

function saveSnippet() {
  const nameInput = document.getElementById('new-snippet-name');
  const name = nameInput.value.trim();

  if (!name) {
    alert('Please enter a snippet name.');
    return;
  }

  if (!getSnippetData) {
    console.error('getSnippetData function not defined');
    return;
  }

  const data = getSnippetData();
  const snippets = getSnippets();

  const newSnippet = {
    id: Date.now().toString(),
    name: name,
    timestamp: Date.now(),
    data: data
  };

  snippets.unshift(newSnippet); // Add to top
  saveSnippets(snippets);

  nameInput.value = '';
  renderSnippetsList();
}

function loadSnippet(id) {
  const snippets = getSnippets();
  const snippet = snippets.find(s => s.id === id);

  if (snippet && setSnippetData) {
    setSnippetData(snippet.data);
    closeSnippetsModal();
    // Optional: Show toast/alert
  }
}

function deleteSnippet(id) {
  if (!confirm('Are you sure you want to delete this snippet?')) return;

  let snippets = getSnippets();
  snippets = snippets.filter(s => s.id !== id);
  saveSnippets(snippets);
  renderSnippetsList();
}

// CodeMirror Integration
const CM_CDN_BASE = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16';
const CM_THEME = 'dracula'; // Dark theme matches the UI

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function loadCSS(href) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

async function initSyntaxHighlighting() {
  // Check if CodeMirror is already loaded
  if (window.CodeMirror) return;

  // Load CSS
  loadCSS(`${CM_CDN_BASE}/codemirror.min.css`);
  loadCSS(`${CM_CDN_BASE}/theme/${CM_THEME}.min.css`);

  // Load Main JS
  try {
    await loadScript(`${CM_CDN_BASE}/codemirror.min.js`);

    // Load Modes
    // xml, js, css, clike are deps for others.
    await loadScript(`${CM_CDN_BASE}/mode/xml/xml.min.js`);
    await loadScript(`${CM_CDN_BASE}/mode/javascript/javascript.min.js`);
    await loadScript(`${CM_CDN_BASE}/mode/css/css.min.js`);
    await loadScript(`${CM_CDN_BASE}/mode/clike/clike.min.js`);

    // Load rest
    await Promise.all([
      loadScript(`${CM_CDN_BASE}/mode/htmlmixed/htmlmixed.min.js`),
      loadScript(`${CM_CDN_BASE}/mode/php/php.min.js`),
      loadScript(`${CM_CDN_BASE}/mode/sql/sql.min.js`),
      loadScript(`${CM_CDN_BASE}/mode/markdown/markdown.min.js`),
      loadScript(`${CM_CDN_BASE}/mode/swift/swift.min.js`),
      loadScript(`${CM_CDN_BASE}/mode/jsx/jsx.min.js`)
    ]);

    applyCodeMirror();
  } catch (e) {
    console.error('Failed to load CodeMirror:', e);
  }
}

function applyCodeMirror() {
  const textareas = document.querySelectorAll('.code-editor, .code-output');

  textareas.forEach(textarea => {
    if (textarea.style.display === 'none') return; // Already applied

    let mode = 'htmlmixed'; // Default
    const id = textarea.id;

    if (id.includes('js') || id.includes('json')) mode = 'javascript';
    if (id.includes('css')) mode = 'css';
    if (id.includes('php')) mode = 'php';
    if (id.includes('sql')) mode = 'sql';
    if (id.includes('md') || id.includes('markdown')) mode = 'markdown';
    if (id.includes('swift')) mode = 'swift';
    if (id.includes('react')) mode = 'jsx';
    if (id.includes('http')) mode = 'javascript'; // JSON usually

    // Specific overrides
    if (id === 'json-input' || id === 'json-output') mode = { name: "javascript", json: true };

    const cm = CodeMirror.fromTextArea(textarea, {
      mode: mode,
      theme: CM_THEME,
      lineNumbers: true,
      lineWrapping: true,
      readOnly: textarea.classList.contains('code-output') && !textarea.classList.contains('editable') ? true : false
    });

    // Sync changes back to textarea
    cm.on('change', (instance) => {
      textarea.value = instance.getValue();
      // Trigger input event for apps that listen to it
      const event = new Event('input', { bubbles: true });
      textarea.dispatchEvent(event);
    });

    // Watch for external changes to textarea value
    const originalDescriptor = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value');
    Object.defineProperty(textarea, 'value', {
      set: function (val) {
        if (val !== cm.getValue()) {
          cm.setValue(val);
        }
        originalDescriptor.set.call(this, val);
      },
      get: function () {
        return originalDescriptor.get.call(this);
      }
    });
  });
}

// Cookie Consent Logic
function initCookieConsent() {
  const consent = localStorage.getItem('devbuilder_cookie_consent');
  if (consent) return;

  const banner = document.createElement('div');
  banner.id = 'cookie-consent-banner';
  banner.style.cssText = `
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #24283b;
    border-top: 1px solid #414868;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.3);
    animation: slideUp 0.5s ease-out;
  `;

  const text = document.createElement('p');
  text.style.cssText = `
    margin: 0;
    color: #c0caf5;
    font-size: 0.9rem;
  `;
  text.innerHTML = 'We use cookies to improve your experience and save your preferences. By using this site, you agree to our use of cookies.';

  const btnContainer = document.createElement('div');
  btnContainer.style.display = 'flex';
  btnContainer.style.gap = '10px';

  const acceptBtn = document.createElement('button');
  acceptBtn.textContent = 'Accept';
  acceptBtn.className = 'btn-primary';
  acceptBtn.style.cssText = `
    padding: 8px 20px;
    font-size: 0.9rem;
    width: auto;
    margin: 0;
  `;
  acceptBtn.onclick = () => {
    localStorage.setItem('devbuilder_cookie_consent', 'true');
    banner.remove();
  };

  btnContainer.appendChild(acceptBtn);
  banner.appendChild(text);
  banner.appendChild(btnContainer);
  document.body.appendChild(banner);

  // Add animation style if not exists
  if (!document.getElementById('cookie-anim-style')) {
    const style = document.createElement('style');
    style.id = 'cookie-anim-style';
    style.textContent = `
      @keyframes slideUp {
        from { transform: translateY(100%); }
        to { transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initSyntaxHighlighting();
  initCookieConsent();
});
