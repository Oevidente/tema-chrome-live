let manifest = {
  name: 'ThemeBeta.com',
  version: '1.0',
  description: '',
  manifest_version: 3,
  theme: {
    images: {
      theme_frame: 'images/theme_frame.png',
      theme_toolbar: 'images/theme_toolbar.png',
      theme_tab_background: 'images/theme_tab_background.png',
      theme_ntp_background: 'images/theme_ntp_background.png',
    },
    colors: {
      frame: [166, 212, 12],
      toolbar: [166, 212, 12],
      tab_text: [0, 0, 0],
      tab_background_text: [0, 0, 0],
      bookmark_text: [0, 0, 0],
      ntp_background: [166, 212, 12],
      ntp_text: [50, 50, 50],
      ntp_link: [0, 0, 0],
      button_background: [166, 212, 12, 1],
    },
    tints: { buttons: [0, 0, 0] },
    properties: {
      ntp_background_alignment: 'bottom',
      ntp_background_repeat: 'no-repeat',
    },
  },
};

const searchbarColorInput = document.querySelector(
  'input[name="searchbar-color"]',
);
const tabColorInput = document.querySelector('input[name="tab-color"]');
const buttonColorInput = document.querySelector('input[name="button-color"]');
const toolbarColorInput = document.querySelector('input[name="toolbar-color"]');

const searchbarElements = document.querySelectorAll(
  '.searchbar, .background-tab, .frame',
);
const tabElements = document.querySelectorAll(
  '.tab-text, .tab-background-text, .ntp-link-text',
);
const buttonElements = document.querySelectorAll('.buttons');
const toolbarElements = document.querySelectorAll('.toolbar');

searchbarColorInput.addEventListener('input', () => {
  const color = searchbarColorInput.value;
  searchbarElements.forEach((element) => {
    element.style.fill = color;
    manifest.theme.colors.frame = hexToRgb(color.toString());
    console.log(manifest.theme.colors.frame);
  });
});

tabColorInput.addEventListener('input', () => {
  const color = tabColorInput.value;
  tabElements.forEach((element) => {
    element.style.fill = color;
    manifest.theme.colors.ntp_text = hexToRgb(color.toString());
    manifest.theme.colors.ntp_link = hexToRgb(color.toString());
    manifest.theme.colors.ntp_background = hexToRgb(color.toString());
    console.log(manifest.theme.colors.ntp_text);
  });
});

buttonColorInput.addEventListener('input', () => {
  const color = buttonColorInput.value;
  buttonElements.forEach((element) => {
    element.style.fill = color;

    manifest.theme.colors.button_background = hexToRgb(color.toString());
  });
});

toolbarColorInput.addEventListener('input', () => {
  const color = toolbarColorInput.value;
  toolbarElements.forEach((element) => {
    element.style.fill = color;
    manifest.theme.colors.toolbar = hexToRgb(color.toString());
  });
});

const jsonData = JSON.stringify(manifest);
console.log(typeof jsonData);

const objData = JSON.parse(jsonData);
console.log(typeof objData);
// const manifest = json.parse();

function hexToRgb(hex) {
  // Remove "#" if it's included in the string
  hex = hex.replace('#', '');

  // Convert hex to decimal values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Return the RGB string
  return `[${r}, ${g}, ${b}]`;
}
const downloadLink = document.querySelector('.download-btn');

searchbarColorInput.addEventListener('input', () => {
  const color = searchbarColorInput.value;
  searchbarElements.forEach((element) => {
    element.style.fill = color;
    manifest.theme.colors.frame = hexToRgb(color.toString());
    console.log(manifest.theme.colors.frame);
  });
});

function downloadJSON() {
  // Atualizar o objeto manifest com as cores selecionadas pelo usuário
  manifest.theme.colors.frame = hexToRgb(searchbarColorInput.value);
  manifest.theme.colors.ntp_text = hexToRgb(tabColorInput.value);
  manifest.theme.colors.ntp_link = hexToRgb(tabColorInput.value);
  manifest.theme.colors.ntp_background = hexToRgb(tabColorInput.value);
  manifest.theme.colors.button_background = hexToRgb(buttonColorInput.value);
  manifest.theme.colors.toolbar = hexToRgb(toolbarColorInput.value);

  const jsonData = JSON.stringify(manifest);
  console.log(typeof jsonData);
  const blob = new Blob([jsonData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  // Criar link de download no HTML
  downloadLink.href = url;
  downloadLink.download = 'manifest.json';
}
function alerta() {
  window.alert("Salve o arquivo 'manifest.json' numa pasta separada");
}
