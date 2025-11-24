const swiftTemplates = {
  view: {
    text: (text, font, color) => `Text("${text}")
    .font(.${font})
    .foregroundColor(.${color})`,
    button: (label, action) => `Button(action: {
    ${action}
}) {
    Text("${label}")
        .padding()
        .background(Color.blue)
        .foregroundColor(.white)
        .cornerRadius(10)
}`,
    image: (name) => `Image(systemName: "${name}")
    .resizable()
    .aspectRatio(contentMode: .fit)
    .frame(width: 100, height: 100)`,
    textfield: (placeholder, binding) => `TextField("${placeholder}", text: $${binding})
    .textFieldStyle(RoundedBorderTextFieldStyle())
    .padding()`
  },
  layout: {
    vstack: (content) => `VStack(spacing: 20) {
    ${content}
}`,
    hstack: (content) => `HStack(spacing: 20) {
    ${content}
}`,
    zstack: (content) => `ZStack {
    ${content}
}`,
    list: (data, rowContent) => `List(${data}) { item in
    ${rowContent}
}`
  },
  data: {
    model: (name, props) => `struct ${name}: Identifiable, Codable {
    var id = UUID()
    ${props}
}`,
    viewmodel: (name, modelName) => `class ${name}ViewModel: ObservableObject {
    @Published var items: [${modelName}] = []
    
    func fetch() {
        // Fetch logic here
    }
}`
  },
  network: {
    api: (url) => `func fetchData() {
    guard let url = URL(string: "${url}") else { return }
    
    URLSession.shared.dataTask(with: url) { data, response, error in
        guard let data = data else { return }
        // Decode data
    }.resume()
}`
  },
  structure: {
    swiftui_app: (name) => `import SwiftUI

@main
struct ${name}App: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}`,
    uikit_vc: (name) => `import UIKit

class ${name}ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white
        setupUI()
    }
    
    func setupUI() {
        // Add subviews
    }
}`
  }
};

let currentCategory = 'view';
let currentType = 'text';

function selectCategory(category) {
  currentCategory = category;
  document.querySelectorAll('.swift-option-card').forEach(el => el.classList.remove('active'));
  document.getElementById(`opt-${category}`).classList.add('active');

  // Show relevant sub-options
  updateSubOptions();
}

function updateSubOptions() {
  const container = document.getElementById('sub-options');
  container.innerHTML = '';

  let options = [];
  if (currentCategory === 'view') options = ['text', 'button', 'image', 'textfield'];
  else if (currentCategory === 'layout') options = ['vstack', 'hstack', 'zstack', 'list'];
  else if (currentCategory === 'data') options = ['model', 'viewmodel'];
  else if (currentCategory === 'network') options = ['api'];
  else if (currentCategory === 'structure') options = ['swiftui_app', 'uikit_vc'];

  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = `btn-secondary ${currentType === opt ? 'active' : ''}`;
    btn.innerText = opt.charAt(0).toUpperCase() + opt.slice(1);
    btn.onclick = () => {
      currentType = opt;
      updateInputs();
      document.querySelectorAll('#sub-options button').forEach(b => b.classList.remove('active')); // clear active
      btn.classList.add('active'); // set active
      generateSwift();
    };
    container.appendChild(btn);
  });

  // Set default type if changed
  if (!options.includes(currentType)) {
    currentType = options[0];
  }
  updateInputs();
  generateSwift();
}

function updateInputs() {
  const container = document.getElementById('input-fields');
  container.innerHTML = '';

  if (currentCategory === 'view') {
    if (currentType === 'text') {
      addInput(container, 'text', 'Content', 'Hello World');
      addSelect(container, 'font', 'Font', ['title', 'headline', 'body', 'caption']);
      addSelect(container, 'color', 'Color', ['primary', 'secondary', 'blue', 'red', 'gray']);
    } else if (currentType === 'button') {
      addInput(container, 'label', 'Label', 'Click Me');
      addInput(container, 'action', 'Action Code', 'print("Clicked")');
    } else if (currentType === 'image') {
      addInput(container, 'name', 'System Name (SF Symbol)', 'star.fill');
    } else if (currentType === 'textfield') {
      addInput(container, 'placeholder', 'Placeholder', 'Enter text...');
      addInput(container, 'binding', 'Binding Variable', 'text');
    }
  } else if (currentCategory === 'layout') {
    addInput(container, 'content', 'Inner Content', 'Text("Item")');
    if (currentType === 'list') {
      addInput(container, 'data', 'Data Source', 'items');
    }
  } else if (currentCategory === 'data') {
    if (currentType === 'model') {
      addInput(container, 'name', 'Struct Name', 'User');
      addInput(container, 'props', 'Properties', 'let name: String\n    let age: Int');
    } else if (currentType === 'viewmodel') {
      addInput(container, 'name', 'Class Name', 'User');
      addInput(container, 'modelName', 'Model Name', 'User');
    }
  } else if (currentCategory === 'network') {
    addInput(container, 'url', 'API URL', 'https://api.example.com/data');
  } else if (currentCategory === 'structure') {
    addInput(container, 'name', 'Name', 'MyApp');
  }
}

function addInput(container, id, label, placeholder) {
  const group = document.createElement('div');
  group.className = 'form-group';
  group.innerHTML = `
    <label>${label}</label>
    <input type="text" id="in-${id}" value="${placeholder}" oninput="generateSwift()">
  `;
  container.appendChild(group);
}

function addSelect(container, id, label, options) {
  const group = document.createElement('div');
  group.className = 'form-group';
  let opts = options.map(o => `<option value="${o}">${o}</option>`).join('');
  group.innerHTML = `
    <label>${label}</label>
    <select id="in-${id}" onchange="generateSwift()">${opts}</select>
  `;
  container.appendChild(group);
}

function generateSwift() {
  let code = '';

  try {
    if (currentCategory === 'view') {
      if (currentType === 'text') {
        code = swiftTemplates.view.text(
          val('text'), val('font'), val('color')
        );
      } else if (currentType === 'button') {
        code = swiftTemplates.view.button(val('label'), val('action'));
      } else if (currentType === 'image') {
        code = swiftTemplates.view.image(val('name'));
      } else if (currentType === 'textfield') {
        code = swiftTemplates.view.textfield(val('placeholder'), val('binding'));
      }
    } else if (currentCategory === 'layout') {
      if (currentType === 'list') {
        code = swiftTemplates.layout.list(val('data'), val('content'));
      } else {
        code = swiftTemplates.layout[currentType](val('content'));
      }
    } else if (currentCategory === 'data') {
      if (currentType === 'model') {
        code = swiftTemplates.data.model(val('name'), val('props'));
      } else if (currentType === 'viewmodel') {
        code = swiftTemplates.data.viewmodel(val('name'), val('modelName'));
      }
    } else if (currentCategory === 'network') {
      code = swiftTemplates.network.api(val('url'));
    } else if (currentCategory === 'structure') {
      code = swiftTemplates.structure[currentType](val('name'));
    }
  } catch (e) {
    code = '// Error generating code';
  }

  document.getElementById('swift-output').value = code;
}

function val(id) {
  const el = document.getElementById(`in-${id}`);
  return el ? el.value : '';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  selectCategory('view');
});

// Snippets Integration
function getSwiftState() {
  const inputs = {};
  document.querySelectorAll('#input-fields input, #input-fields select').forEach(el => {
    const id = el.id.replace('in-', '');
    inputs[id] = el.value;
  });

  return {
    category: currentCategory,
    type: currentType,
    inputs: inputs
  };
}

function setSwiftState(data) {
  if (!data) return;

  if (data.category) {
    selectCategory(data.category);
  }

  if (data.type) {
    currentType = data.type;
    updateSubOptions(); // This resets inputs, so we need to set them after

    // Manually set active class on sub-options
    document.querySelectorAll('#sub-options button').forEach(b => {
      if (b.innerText.toLowerCase() === currentType.replace('_', ' ')) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  }

  if (data.inputs) {
    // Wait for inputs to be generated
    setTimeout(() => {
      Object.keys(data.inputs).forEach(key => {
        const el = document.getElementById(`in-${key}`);
        if (el) el.value = data.inputs[key];
      });
      generateSwift();
    }, 0);
  }
}

initSnippets('swift-builder', getSwiftState, setSwiftState);

