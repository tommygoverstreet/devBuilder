function updateHead() {
  const title = document.getElementById('seo-title').value;
  const description = document.getElementById('seo-description').value;
  const keywords = document.getElementById('seo-keywords').value;
  const author = document.getElementById('seo-author').value;
  const themeColor = document.getElementById('seo-theme-color').value;

  const robotsIndex = document.querySelector('input[name="robots-index"]:checked').value;
  const robotsFollow = document.querySelector('input[name="robots-follow"]:checked').value;

  const ogTitle = document.getElementById('og-title').value || title;
  const ogDesc = document.getElementById('og-description').value || description;
  const ogImage = document.getElementById('og-image').value;
  const ogUrl = document.getElementById('og-url').value;

  const twitterCard = document.getElementById('twitter-card').value;
  const twitterSite = document.getElementById('twitter-site').value;

  const gaId = document.getElementById('ga-id').value;
  const firebaseConfig = document.getElementById('firebase-config').value;

  let output = `<!-- Basic SEO -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<meta name="author" content="${author}">
<meta name="theme-color" content="${themeColor}">
<meta name="robots" content="${robotsIndex}, ${robotsFollow}">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="${ogTitle}">
<meta property="og:description" content="${ogDesc}">
<meta property="og:url" content="${ogUrl}">
<meta property="og:image" content="${ogImage}">

<!-- Twitter Card -->
<meta name="twitter:card" content="${twitterCard}">
<meta name="twitter:site" content="${twitterSite}">
<meta name="twitter:title" content="${ogTitle}">
<meta name="twitter:description" content="${ogDesc}">
<meta name="twitter:image" content="${ogImage}">
`;

  // CDNs
  output += `\n<!-- Libraries & CDNs -->\n`;
  if (document.getElementById('cdn-bootstrap').checked) {
    output += `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">\n`;
    output += `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>\n`;
  }
  if (document.getElementById('cdn-tailwind').checked) {
    output += `<script src="https://cdn.tailwindcss.com"></script>\n`;
  }
  if (document.getElementById('cdn-fontawesome').checked) {
    output += `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">\n`;
  }
  if (document.getElementById('cdn-jquery').checked) {
    output += `<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>\n`;
  }
  if (document.getElementById('cdn-react').checked) {
    output += `<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>\n`;
    output += `<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>\n`;
  }
  if (document.getElementById('cdn-vue').checked) {
    output += `<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>\n`;
  }
  if (document.getElementById('cdn-axios').checked) {
    output += `<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>\n`;
  }
  if (document.getElementById('cdn-lodash').checked) {
    output += `<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>\n`;
  }

  // Integrations
  if (gaId) {
    output += `\n<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${gaId}');
</script>\n`;
  }

  if (firebaseConfig) {
    output += `\n<!-- Firebase -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
  
  const firebaseConfig = ${firebaseConfig};
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>\n`;
  }

  document.getElementById('head-output').value = output;
}

// Snippets Integration
function getHeadState() {
  return {
    title: document.getElementById('seo-title').value,
    description: document.getElementById('seo-description').value,
    keywords: document.getElementById('seo-keywords').value,
    author: document.getElementById('seo-author').value,
    themeColor: document.getElementById('seo-theme-color').value,
    robotsIndex: document.querySelector('input[name="robots-index"]:checked').value,
    robotsFollow: document.querySelector('input[name="robots-follow"]:checked').value,
    ogTitle: document.getElementById('og-title').value,
    ogDesc: document.getElementById('og-description').value,
    ogImage: document.getElementById('og-image').value,
    ogUrl: document.getElementById('og-url').value,
    twitterCard: document.getElementById('twitter-card').value,
    twitterSite: document.getElementById('twitter-site').value,
    cdns: {
      bootstrap: document.getElementById('cdn-bootstrap').checked,
      tailwind: document.getElementById('cdn-tailwind').checked,
      fontawesome: document.getElementById('cdn-fontawesome').checked,
      jquery: document.getElementById('cdn-jquery').checked,
      react: document.getElementById('cdn-react').checked,
      vue: document.getElementById('cdn-vue').checked,
      axios: document.getElementById('cdn-axios').checked,
      lodash: document.getElementById('cdn-lodash').checked
    },
    gaId: document.getElementById('ga-id').value,
    firebaseConfig: document.getElementById('firebase-config').value
  };
}

function setHeadState(data) {
  if (!data) return;

  document.getElementById('seo-title').value = data.title || '';
  document.getElementById('seo-description').value = data.description || '';
  document.getElementById('seo-keywords').value = data.keywords || '';
  document.getElementById('seo-author').value = data.author || '';
  document.getElementById('seo-theme-color').value = data.themeColor || '#ffffff';

  if (data.robotsIndex) {
    document.querySelector(`input[name="robots-index"][value="${data.robotsIndex}"]`).checked = true;
  }
  if (data.robotsFollow) {
    document.querySelector(`input[name="robots-follow"][value="${data.robotsFollow}"]`).checked = true;
  }

  document.getElementById('og-title').value = data.ogTitle || '';
  document.getElementById('og-description').value = data.ogDesc || '';
  document.getElementById('og-image').value = data.ogImage || '';
  document.getElementById('og-url').value = data.ogUrl || '';

  document.getElementById('twitter-card').value = data.twitterCard || 'summary';
  document.getElementById('twitter-site').value = data.twitterSite || '';

  if (data.cdns) {
    document.getElementById('cdn-bootstrap').checked = data.cdns.bootstrap || false;
    document.getElementById('cdn-tailwind').checked = data.cdns.tailwind || false;
    document.getElementById('cdn-fontawesome').checked = data.cdns.fontawesome || false;
    document.getElementById('cdn-jquery').checked = data.cdns.jquery || false;
    document.getElementById('cdn-react').checked = data.cdns.react || false;
    document.getElementById('cdn-vue').checked = data.cdns.vue || false;
    document.getElementById('cdn-axios').checked = data.cdns.axios || false;
    document.getElementById('cdn-lodash').checked = data.cdns.lodash || false;
  }

  document.getElementById('ga-id').value = data.gaId || '';
  document.getElementById('firebase-config').value = data.firebaseConfig || '';

  updateHead();
}

// Initialize
updateHead();
initSnippets('head-builder', getHeadState, setHeadState);
