document.addEventListener('DOMContentLoaded', () => {
  updatePalette();
});

function updateBaseColorFromHex() {
  const hexInput = document.getElementById('base-color-hex');
  const colorInput = document.getElementById('base-color');
  let hex = hexInput.value;

  if (isValidHex(hex)) {
    if (!hex.startsWith('#')) {
      hex = '#' + hex;
    }
    colorInput.value = hex;
    updatePalette();
  }
}

function randomizePalette() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  document.getElementById('base-color').value = randomColor;
  document.getElementById('base-color-hex').value = randomColor;
  updatePalette();
}

function updatePalette() {
  const baseColor = document.getElementById('base-color').value;
  document.getElementById('base-color-hex').value = baseColor;
  const harmonyRule = document.getElementById('harmony-rule').value;

  const hsl = hexToHSL(baseColor);
  let colors = [];

  switch (harmonyRule) {
    case 'monochromatic':
      colors = generateMonochromatic(hsl);
      break;
    case 'analogous':
      colors = generateAnalogous(hsl);
      break;
    case 'complementary':
      colors = generateComplementary(hsl);
      break;
    case 'split-complementary':
      colors = generateSplitComplementary(hsl);
      break;
    case 'triadic':
      colors = generateTriadic(hsl);
      break;
    case 'tetradic':
      colors = generateTetradic(hsl);
      break;
  }

  renderPalette(colors);
  generateCSS(colors);
}

function renderPalette(colors) {
  const container = document.getElementById('palette-display');
  container.innerHTML = '';

  colors.forEach((color, index) => {
    const hex = hslToHex(color.h, color.s, color.l);
    const swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.backgroundColor = hex;
    swatch.onclick = () => {
      navigator.clipboard.writeText(hex);
      showToast('Color copied!');
    };

    swatch.innerHTML = `
            <div class="swatch-info">
                <span class="swatch-hex">${hex}</span>
                <span class="swatch-name">--color-${index + 1}</span>
            </div>
        `;

    container.appendChild(swatch);
  });
}

function generateCSS(colors) {
  let css = ':root {\n';
  colors.forEach((color, index) => {
    const hex = hslToHex(color.h, color.s, color.l);
    css += `  --color-${index + 1}: ${hex};\n`;
  });
  css += '}';
  document.getElementById('css-output').value = css;
}

// Color Utility Functions

function isValidHex(hex) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(hex);
}

function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return {
    h,
    s,
    l
  };
}

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}

// Harmony Generators

function generateMonochromatic(hsl) {
  return [{
    ...hsl,
    l: Math.max(0, Math.min(100, hsl.l + 40))
  },
  {
    ...hsl,
    l: Math.max(0, Math.min(100, hsl.l + 20))
  },
    hsl,
  {
    ...hsl,
    l: Math.max(0, Math.min(100, hsl.l - 20))
  },
  {
    ...hsl,
    l: Math.max(0, Math.min(100, hsl.l - 40))
  }
  ];
}

function generateAnalogous(hsl) {
  return [{
    ...hsl,
    h: (hsl.h - 30 + 360) % 360
  },
  {
    ...hsl,
    h: (hsl.h - 15 + 360) % 360
  },
    hsl,
  {
    ...hsl,
    h: (hsl.h + 15) % 360
  },
  {
    ...hsl,
    h: (hsl.h + 30) % 360
  }
  ];
}

function generateComplementary(hsl) {
  return [
    hsl,
    {
      ...hsl,
      h: (hsl.h + 180) % 360
    },
    {
      ...hsl,
      l: Math.max(0, Math.min(100, hsl.l + 20))
    },
    {
      ...hsl,
      h: (hsl.h + 180) % 360,
      l: Math.max(0, Math.min(100, hsl.l - 20))
    }
  ];
}

function generateSplitComplementary(hsl) {
  return [
    hsl,
    {
      ...hsl,
      h: (hsl.h + 150) % 360
    },
    {
      ...hsl,
      h: (hsl.h + 210) % 360
    }
  ];
}

function generateTriadic(hsl) {
  return [
    hsl,
    {
      ...hsl,
      h: (hsl.h + 120) % 360
    },
    {
      ...hsl,
      h: (hsl.h + 240) % 360
    }
  ];
}

function generateTetradic(hsl) {
  return [
    hsl,
    {
      ...hsl,
      h: (hsl.h + 90) % 360
    },
    {
      ...hsl,
      h: (hsl.h + 180) % 360
    },
    {
      ...hsl,
      h: (hsl.h + 270) % 360
    }
  ];
}
