document.addEventListener('DOMContentLoaded', () => {
  updatePreview();
});

function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  const activeBtn = document.querySelector(`.tab-btn[onclick="switchTab('${tabName}')"]`);
  const activeContent = document.getElementById(`tab-${tabName}`);

  if (activeBtn) activeBtn.classList.add('active');
  if (activeContent) activeContent.classList.add('active');
}

function updatePreview() {
  const config = getConfig();
  const html = generateHTML(config);

  // Update Code View
  document.getElementById('code-output').value = html;

  // Update Iframe
  const frame = document.getElementById('preview-frame');
  const doc = frame.contentDocument || frame.contentWindow.document;
  doc.open();
  doc.write(html);
  doc.close();
}

function getConfig() {
  return {
    title: document.getElementById('page-title').value,
    theme: document.getElementById('page-theme').value,
    nav: document.getElementById('nav-style').value,
    sections: {
      hero: document.getElementById('section-hero').checked,
      features: document.getElementById('section-features').checked,
      about: document.getElementById('section-about').checked,
      pricing: document.getElementById('section-pricing').checked,
      testimonials: document.getElementById('section-testimonials').checked,
      contact: document.getElementById('section-contact').checked
    },
    footer: document.getElementById('footer-style').value
  };
}

function generateHTML(config) {
  const styles = getThemeStyles(config.theme);

  let bodyContent = '';

  // Navigation
  if (config.nav !== 'none') {
    bodyContent += getNavTemplate(config.nav, config.title);
  }

  // Sections
  if (config.sections.hero) bodyContent += getHeroTemplate(config.theme);
  if (config.sections.features) bodyContent += getFeaturesTemplate();
  if (config.sections.about) bodyContent += getAboutTemplate();
  if (config.sections.pricing) bodyContent += getPricingTemplate();
  if (config.sections.testimonials) bodyContent += getTestimonialsTemplate();
  if (config.sections.contact) bodyContent += getContactTemplate();

  // Footer
  if (config.footer !== 'none') {
    bodyContent += getFooterTemplate(config.footer, config.title);
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.title}</title>
    <style>
        /* Reset & Base Styles */
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; }
        img { max-width: 100%; height: auto; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
        section { padding: 60px 0; }
        h1, h2, h3 { margin-bottom: 1rem; line-height: 1.2; }
        p { margin-bottom: 1rem; }
        .btn { display: inline-block; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; transition: background 0.3s; border: none; cursor: pointer; }
        .btn:hover { background: #0056b3; }
        
        /* Theme Styles */
        ${styles}

        /* Component Styles */
        ${getComponentStyles()}
    </style>
</head>
<body>
${bodyContent}
</body>
</html>`;
}

function getThemeStyles(theme) {
  switch (theme) {
    case 'dark':
      return `
        body { background: #1a1a1a; color: #f0f0f0; }
        header, footer { background: #000; color: white; }
        .card { background: #2d2d2d; border: 1px solid #444; }
        section:nth-child(even) { background: #252525; }
        .btn { background: #bb86fc; color: #000; }
        .btn:hover { background: #9965f4; }
      `;
    case 'blue':
      return `
        body { background: #f4f7f6; color: #2c3e50; }
        header { background: #2c3e50; color: white; }
        footer { background: #34495e; color: white; }
        .btn { background: #3498db; }
        .btn:hover { background: #2980b9; }
        h1, h2, h3 { color: #2c3e50; }
      `;
    default: // Light
      return `
        body { background: #fff; color: #333; }
        header { background: #fff; border-bottom: 1px solid #eee; }
        footer { background: #f8f9fa; border-top: 1px solid #eee; }
        section:nth-child(even) { background: #f8f9fa; }
      `;
  }
}

function getComponentStyles() {
  return `
    /* Navigation */
    header { padding: 20px 0; }
    nav { display: flex; justify-content: space-between; align-items: center; }
    .logo { font-weight: bold; font-size: 1.5rem; text-decoration: none; color: inherit; }
    .nav-links { display: flex; gap: 20px; list-style: none; }
    .nav-links a { text-decoration: none; color: inherit; }
    
    /* Hero */
    .hero { text-align: center; padding: 100px 0; }
    .hero h1 { font-size: 3rem; margin-bottom: 20px; }
    .hero p { font-size: 1.2rem; color: #666; max-width: 600px; margin: 0 auto 30px; }
    
    /* Features */
    .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; }
    .card { padding: 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); text-align: center; }
    .icon { font-size: 2rem; margin-bottom: 15px; color: #007bff; }
    
    /* Pricing */
    .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; }
    .price { font-size: 2.5rem; font-weight: bold; margin: 20px 0; }
    
    /* Contact */
    .contact-form { max-width: 600px; margin: 0 auto; display: grid; gap: 15px; }
    input, textarea { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; }
    
    /* Footer */
    footer { padding: 40px 0; text-align: center; }
    .footer-cols { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; text-align: left; margin-bottom: 30px; }
  `;
}

// Templates

function getNavTemplate(style, title) {
  let links = `
    <ul class="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>`;

  let search = style === 'search' ? `<input type="text" placeholder="Search..." style="padding: 5px; width: auto;">` : '';

  return `
    <header>
        <div class="container">
            <nav style="${style === 'centered' ? 'flex-direction: column; gap: 1rem;' : ''}">
                <a href="#" class="logo">${title}</a>
                ${links}
                ${search}
            </nav>
        </div>
    </header>`;
}

function getHeroTemplate(theme) {
  return `
    <section class="hero">
        <div class="container">
            <h1>Build Something Amazing</h1>
            <p>Launch your next project faster with our powerful tools and components.</p>
            <a href="#" class="btn">Get Started</a>
            <a href="#" class="btn" style="background: transparent; border: 1px solid currentColor; color: inherit; margin-left: 10px;">Learn More</a>
        </div>
    </section>`;
}

function getFeaturesTemplate() {
  return `
    <section id="features">
        <div class="container">
            <h2 style="text-align: center; margin-bottom: 40px;">Key Features</h2>
            <div class="features-grid">
                <div class="card">
                    <div class="icon">⚡</div>
                    <h3>Fast Performance</h3>
                    <p>Optimized for speed and efficiency to ensure the best user experience.</p>
                </div>
                <div class="card">
                    <div class="icon">📱</div>
                    <h3>Responsive Design</h3>
                    <p>Looks great on all devices, from mobile phones to desktop computers.</p>
                </div>
                <div class="card">
                    <div class="icon">🔒</div>
                    <h3>Secure</h3>
                    <p>Built with security best practices to keep your data safe.</p>
                </div>
            </div>
        </div>
    </section>`;
}

function getAboutTemplate() {
  return `
    <section id="about">
        <div class="container">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
                <div>
                    <h2>About Us</h2>
                    <p>We are a passionate team dedicated to building the best software solutions for our clients. With years of experience, we deliver quality and innovation.</p>
                </div>
                <div style="background: #ddd; height: 300px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #888;">
                    Image Placeholder
                </div>
            </div>
        </div>
    </section>`;
}

function getPricingTemplate() {
  return `
    <section id="pricing">
        <div class="container">
            <h2 style="text-align: center; margin-bottom: 40px;">Simple Pricing</h2>
            <div class="pricing-grid">
                <div class="card">
                    <h3>Starter</h3>
                    <div class="price">$0</div>
                    <p>Free forever</p>
                    <ul style="list-style: none; margin: 20px 0; text-align: left;">
                        <li>✓ Basic Features</li>
                        <li>✓ 1 User</li>
                    </ul>
                    <a href="#" class="btn">Sign Up</a>
                </div>
                <div class="card" style="border: 2px solid #007bff; transform: scale(1.05);">
                    <h3>Pro</h3>
                    <div class="price">$29</div>
                    <p>Per month</p>
                    <ul style="list-style: none; margin: 20px 0; text-align: left;">
                        <li>✓ All Features</li>
                        <li>✓ 5 Users</li>
                        <li>✓ Priority Support</li>
                    </ul>
                    <a href="#" class="btn">Go Pro</a>
                </div>
                <div class="card">
                    <h3>Enterprise</h3>
                    <div class="price">$99</div>
                    <p>Per month</p>
                    <ul style="list-style: none; margin: 20px 0; text-align: left;">
                        <li>✓ Unlimited Users</li>
                        <li>✓ Custom Solutions</li>
                    </ul>
                    <a href="#" class="btn">Contact Us</a>
                </div>
            </div>
        </div>
    </section>`;
}

function getTestimonialsTemplate() {
  return `
    <section id="testimonials">
        <div class="container">
            <h2 style="text-align: center; margin-bottom: 40px;">What People Say</h2>
            <div class="features-grid">
                <div class="card">
                    <p>"This product changed my life! Highly recommended."</p>
                    <p style="margin-top: 15px; font-weight: bold;">- Jane Doe</p>
                </div>
                <div class="card">
                    <p>"Incredible support and amazing features."</p>
                    <p style="margin-top: 15px; font-weight: bold;">- John Smith</p>
                </div>
            </div>
        </div>
    </section>`;
}

function getContactTemplate() {
  return `
    <section id="contact">
        <div class="container">
            <h2 style="text-align: center; margin-bottom: 40px;">Get In Touch</h2>
            <form class="contact-form">
                <input type="text" placeholder="Name" required>
                <input type="email" placeholder="Email" required>
                <textarea rows="5" placeholder="Message" required></textarea>
                <button type="submit" class="btn">Send Message</button>
            </form>
        </div>
    </section>`;
}

function getFooterTemplate(style, title) {
  if (style === 'columns') {
    return `
        <footer>
            <div class="container">
                <div class="footer-cols">
                    <div>
                        <h3>${title}</h3>
                        <p>Making the web a better place.</p>
                    </div>
                    <div>
                        <h4>Product</h4>
                        <ul style="list-style: none;">
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <ul style="list-style: none;">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <p>&copy; ${new Date().getFullYear()} ${title}. All rights reserved.</p>
            </div>
        </footer>`;
  }

  return `
    <footer>
        <div class="container">
            <p>&copy; ${new Date().getFullYear()} ${title}. All rights reserved.</p>
        </div>
    </footer>`;
}

function downloadPage() {
  const html = document.getElementById('code-output').value;
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'index.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
