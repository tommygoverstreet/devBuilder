let currentFramework = 'css';

function updateFramework() {
  currentFramework = document.getElementById('framework-select').value;
}

function copyBlock(type) {
  let code = '';

  if (currentFramework === 'css') {
    switch (type) {
      case 'card':
        code = `
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<style>
.card { border: 1px solid #ddd; border-radius: 0.25rem; }
.card-body { padding: 1.25rem; }
.card-title { margin-bottom: 0.75rem; }
.btn-primary { color: #fff; background-color: #007bff; border-color: #007bff; padding: 0.375rem 0.75rem; text-decoration: none; border-radius: 0.25rem; display: inline-block; }
</style>`;
        break;
      case 'navbar':
        code = `
<nav class="navbar">
  <a class="navbar-brand" href="#">Navbar</a>
  <div class="navbar-nav">
    <a class="nav-link active" href="#">Home</a>
    <a class="nav-link" href="#">Features</a>
  </div>
</nav>
<style>
.navbar { display: flex; justify-content: space-between; padding: 0.5rem 1rem; background-color: #343a40; color: white; }
.navbar-brand { color: white; text-decoration: none; font-size: 1.25rem; }
.nav-link { color: rgba(255,255,255,0.5); text-decoration: none; margin-left: 1rem; }
.nav-link.active { color: white; }
</style>`;
        break;
      case 'alert':
        code = `
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<style>
.alert { padding: 0.75rem 1.25rem; margin-bottom: 1rem; border: 1px solid transparent; border-radius: 0.25rem; }
.alert-success { color: #155724; background-color: #d4edda; border-color: #c3e6cb; }
</style>`;
        break;
      case 'btn-group':
        code = `
<div class="btn-group" role="group">
  <button type="button" class="btn">Left</button>
  <button type="button" class="btn">Middle</button>
  <button type="button" class="btn">Right</button>
</div>
<style>
.btn-group { display: inline-flex; vertical-align: middle; }
.btn-group .btn { border-radius: 0; }
.btn-group .btn:first-child { border-top-left-radius: 0.25rem; border-bottom-left-radius: 0.25rem; }
.btn-group .btn:last-child { border-top-right-radius: 0.25rem; border-bottom-right-radius: 0.25rem; }
.btn { display: inline-block; font-weight: 400; text-align: center; vertical-align: middle; cursor: pointer; padding: 0.375rem 0.75rem; font-size: 1rem; line-height: 1.5; border-radius: 0.25rem; color: #fff; background-color: #6c757d; border: 1px solid #6c757d; }
</style>`;
        break;
      case 'hero':
        code = `
<section class="hero">
  <div class="hero-content">
    <h1>Welcome to Our Platform</h1>
    <p>We help you build amazing things with ease and efficiency.</p>
    <a href="#" class="btn btn-primary">Get Started</a>
    <a href="#" class="btn btn-outline">Learn More</a>
  </div>
</section>
<style>
.hero { background: #f8f9fa; padding: 4rem 2rem; text-align: center; border-radius: 0.5rem; }
.hero h1 { font-size: 2.5rem; margin-bottom: 1rem; color: #333; }
.hero p { font-size: 1.25rem; color: #6c757d; margin-bottom: 2rem; }
.btn { display: inline-block; padding: 0.5rem 1.5rem; border-radius: 0.25rem; text-decoration: none; font-weight: bold; margin: 0 0.5rem; }
.btn-primary { background: #007bff; color: white; }
.btn-outline { border: 1px solid #007bff; color: #007bff; }
</style>`;
        break;
      case 'features':
        code = `
<section class="features">
  <div class="feature-grid">
    <div class="feature-item">
      <h3>Fast Performance</h3>
      <p>Optimized for speed and efficiency.</p>
    </div>
    <div class="feature-item">
      <h3>Secure</h3>
      <p>Built with security best practices in mind.</p>
    </div>
    <div class="feature-item">
      <h3>Responsive</h3>
      <p>Looks great on all devices and screen sizes.</p>
    </div>
  </div>
</section>
<style>
.features { padding: 3rem 1rem; }
.feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
.feature-item { text-align: center; padding: 1.5rem; border: 1px solid #eee; border-radius: 0.5rem; }
.feature-item h3 { margin-bottom: 0.5rem; color: #333; }
.feature-item p { color: #666; }
</style>`;
        break;
      case 'footer':
        code = `
<footer class="footer">
  <div class="footer-content">
    <div class="footer-col">
      <h4>Company</h4>
      <a href="#">About Us</a>
      <a href="#">Careers</a>
    </div>
    <div class="footer-col">
      <h4>Resources</h4>
      <a href="#">Blog</a>
      <a href="#">Documentation</a>
    </div>
    <div class="footer-col">
      <h4>Legal</h4>
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
    </div>
  </div>
  <div class="footer-bottom">
    &copy; 2025 Company Name. All rights reserved.
  </div>
</footer>
<style>
.footer { background: #343a40; color: white; padding: 3rem 1rem 1rem; }
.footer-content { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }
.footer-col h4 { margin-bottom: 1rem; color: #f8f9fa; }
.footer-col a { display: block; color: #adb5bd; text-decoration: none; margin-bottom: 0.5rem; }
.footer-col a:hover { color: white; }
.footer-bottom { text-align: center; margin-top: 3rem; padding-top: 1rem; border-top: 1px solid #495057; color: #adb5bd; font-size: 0.9rem; }
</style>`;
        break;
      case 'pricing':
        code = `
<div class="pricing-table">
  <div class="pricing-card">
    <h3>Basic</h3>
    <div class="price">$9<span>/mo</span></div>
    <ul>
      <li>5 Projects</li>
      <li>Basic Support</li>
    </ul>
    <button>Choose Basic</button>
  </div>
  <div class="pricing-card featured">
    <h3>Pro</h3>
    <div class="price">$29<span>/mo</span></div>
    <ul>
      <li>Unlimited Projects</li>
      <li>Priority Support</li>
    </ul>
    <button>Choose Pro</button>
  </div>
  <div class="pricing-card">
    <h3>Enterprise</h3>
    <div class="price">$99<span>/mo</span></div>
    <ul>
      <li>Custom Solutions</li>
      <li>24/7 Support</li>
    </ul>
    <button>Contact Us</button>
  </div>
</div>
<style>
.pricing-table { display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; padding: 2rem; }
.pricing-card { background: white; border: 1px solid #ddd; border-radius: 0.5rem; padding: 2rem; text-align: center; width: 300px; }
.pricing-card.featured { border-color: #007bff; box-shadow: 0 0 15px rgba(0,123,255,0.1); transform: scale(1.05); }
.pricing-card h3 { margin-bottom: 1rem; color: #333; }
.price { font-size: 2.5rem; font-weight: bold; color: #007bff; margin-bottom: 1.5rem; }
.price span { font-size: 1rem; color: #666; font-weight: normal; }
.pricing-card ul { list-style: none; padding: 0; margin-bottom: 2rem; }
.pricing-card li { margin-bottom: 0.5rem; color: #666; }
.pricing-card button { background: #007bff; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.25rem; cursor: pointer; width: 100%; }
.pricing-card button:hover { background: #0056b3; }
</style>`;
        break;
      case 'contact':
        code = `
<section class="contact-section">
  <h2>Contact Us</h2>
  <form class="contact-form">
    <div class="form-group">
      <label>Name</label>
      <input type="text" placeholder="Your Name">
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="email" placeholder="your@email.com">
    </div>
    <div class="form-group">
      <label>Message</label>
      <textarea rows="5" placeholder="How can we help?"></textarea>
    </div>
    <button type="submit">Send Message</button>
  </form>
</section>
<style>
.contact-section { max-width: 600px; margin: 0 auto; padding: 2rem; }
.contact-section h2 { text-align: center; margin-bottom: 2rem; color: #333; }
.form-group { margin-bottom: 1.5rem; }
.form-group label { display: block; margin-bottom: 0.5rem; color: #555; }
.form-group input, .form-group textarea { width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 0.25rem; font-family: inherit; }
.contact-form button { background: #007bff; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.25rem; cursor: pointer; width: 100%; font-size: 1rem; }
</style>`;
        break;
      case 'input-group':
        code = `
<div class="input-group">
  <label for="email">Email Address</label>
  <input type="email" id="email" placeholder="name@example.com">
  <small>We'll never share your email with anyone else.</small>
</div>
<style>
.input-group { margin-bottom: 1rem; }
.input-group label { display: block; margin-bottom: 0.5rem; font-weight: 500; color: #333; }
.input-group input { display: block; width: 100%; padding: 0.375rem 0.75rem; font-size: 1rem; line-height: 1.5; color: #495057; background-color: #fff; border: 1px solid #ced4da; border-radius: 0.25rem; }
.input-group small { display: block; margin-top: 0.25rem; font-size: 80%; color: #6c757d; }
</style>`;
        break;
    }
  } else if (currentFramework === 'bootstrap') {
    switch (type) {
      case 'card':
        code = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
        break;
      case 'navbar':
        code = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
      </ul>
    </div>
  </div>
</nav>`;
        break;
      case 'alert':
        code = `<div class="alert alert-success" role="alert">A simple success alert—check it out!</div>`;
        break;
      case 'btn-group':
        code = `
<div class="btn-group" role="group">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>`;
        break;
      case 'hero':
        code = `
<div class="px-4 py-5 my-5 text-center">
  <h1 class="display-5 fw-bold">Centered hero</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap.</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
      <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
    </div>
  </div>
</div>`;
        break;
      case 'features':
        code = `
<div class="container px-4 py-5">
  <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div class="feature col">
      <h2>Featured title</h2>
      <p>Paragraph of text beneath the heading to explain the heading.</p>
    </div>
    <div class="feature col">
      <h2>Featured title</h2>
      <p>Paragraph of text beneath the heading to explain the heading.</p>
    </div>
    <div class="feature col">
      <h2>Featured title</h2>
      <p>Paragraph of text beneath the heading to explain the heading.</p>
    </div>
  </div>
</div>`;
        break;
      case 'footer':
        code = `
<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-muted">&copy; 2025 Company, Inc</p>
  </footer>
</div>`;
        break;
      case 'pricing':
        code = `
<div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">Free</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>10 users included</li>
          <li>2 GB of storage</li>
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
      </div>
    </div>
  </div>
</div>`;
        break;
      case 'contact':
        code = `
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
        break;
      case 'input-group':
        code = `
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>`;
        break;
    }
  } else if (currentFramework === 'tailwind') {
    switch (type) {
      case 'card':
        code = `
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Card Title</div>
    <p class="text-gray-700 text-base">Some quick example text to build on the card title.</p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go somewhere</button>
  </div>
</div>`;
        break;
      case 'navbar':
        code = `
<nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">Navbar</span>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Home</a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Features</a>
    </div>
  </div>
</nav>`;
        break;
      case 'alert':
        code = `
<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">Success!</strong>
  <span class="block sm:inline">A simple success alert—check it out!</span>
</div>`;
        break;
      case 'btn-group':
        code = `
<div class="inline-flex rounded-md shadow-sm" role="group">
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700">Left</button>
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700">Middle</button>
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700">Right</button>
</div>`;
        break;
      case 'hero':
        code = `
<div class="bg-gray-50 py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Welcome to Our Platform</h1>
      <p class="mt-6 text-lg leading-8 text-gray-600">We help you build amazing things with ease and efficiency.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </div>
</div>`;
        break;
      case 'features':
        code = `
<div class="py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">Fast Performance</dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Optimized for speed and efficiency.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">Secure</dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Built with security best practices in mind.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>`;
        break;
      case 'footer':
        code = `
<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" class="hover:underline">Company™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li><a href="#" class="mr-4 hover:underline md:mr-6 ">About</a></li>
        <li><a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a></li>
        <li><a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
    </ul>
    </div>
</footer>`;
        break;
      case 'pricing':
        code = `
<div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="mx-auto max-w-3xl text-center">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pricing</h2>
  </div>
  <div class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
    <div class="rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 bg-white/60 sm:mx-8 lg:mx-0">
      <h3 class="text-base font-semibold leading-7 text-indigo-600">Basic</h3>
      <p class="mt-4 flex items-baseline gap-x-2"><span class="text-5xl font-bold tracking-tight text-gray-900">$9</span><span class="text-base text-gray-500">/month</span></p>
      <a href="#" class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300">Buy plan</a>
    </div>
  </div>
</div>`;
        break;
      case 'contact':
        code = `
<form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">Email</label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">Message</label>
      <textarea class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message"></textarea>
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3">
      <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Send</button>
    </div>
  </div>
</form>`;
        break;
      case 'input-group':
        code = `
<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
</div>`;
        break;
    }
  }

  navigator.clipboard.writeText(code.trim()).then(() => {
    alert('Code copied to clipboard!');
  });
}

// Snippets Integration
function getUIBlocksState() {
  return {
    framework: document.getElementById('framework-select').value
  };
}

function setUIBlocksState(data) {
  if (!data) return;
  document.getElementById('framework-select').value = data.framework || 'css';
  updateFramework();
}

initSnippets('ui-blocks-builder', getUIBlocksState, setUIBlocksState);

