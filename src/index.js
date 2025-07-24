import './styles/style.css';
import './themes/themeManager.js';
import './utils/calculator.js';
import faviconUrl from './images/icon.png';

const link = document.createElement('link');
link.rel = 'icon';
link.href = faviconUrl;
document.head.appendChild(link);