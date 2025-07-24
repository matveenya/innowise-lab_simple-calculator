const themes = {
  dark: {
    '--text-color': '#f5f5f5',
    '--button-background': '#7e7e7e',
    '--button-hover': '#555',
    '--button-active': '#615f5f',
    '--operator-background': '#ff9500',
    '--operator-hover': '#ffaa33',
    '--operator-active': '#ff8c00',
    '--operator-other-background': '#5a5858',
    '--operator-other-hover': '#424141',
    '--operator-other-active': '#525050',
    '--theme-button-background': '#4b4848',
    '--theme-button-hover': '#353232',
    '--theme-button-active': '#444040',
    '--display-background': '#4b4848',
    '--border-color': '#4d4c4c',
  },
  light: {
    '--text-color': '#333333',
    '--button-background': '#e0e0e0',
    '--button-hover': '#d0d0d0',
    '--button-active': '#c0c0c0',
    '--operator-other-background': '#d0d0d0',
    '--operator-other-hover': '#c0c0c0',
    '--operator-other-active': '#b0b0b0',
    '--theme-button-background': '#d0d0d0',
    '--theme-button-hover': '#c0c0c0',
    '--theme-button-active': '#b0b0b0',
    '--display-background': '#e0e0e0',
    '--border-color': '#cccccc',
  },
};

const themeButton = document.querySelector('.theme-switcher');
const root = document.documentElement;

themeButton.addEventListener('click', (event) => {
  const theme = event.target.textContent.toLowerCase();

  const themeProperty = themes[theme];
  Object.entries(themeProperty).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
});
