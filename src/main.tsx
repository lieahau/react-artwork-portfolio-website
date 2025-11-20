import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import siteSettings from './content/site.json';
import type { SiteSettings } from './types/interface.ts';
import { colorsConfig } from './datas/colorConfig.ts';

function init() {
  const settings = siteSettings as SiteSettings;

  // Update document title from CMS
  if (settings.title) {
    document.title = settings.title;
  }

  // Update favicon from CMS
  if (settings.favicon) {
    const href = settings.favicon;

    let link = document.querySelector<HTMLLinkElement>("link[rel='icon']");

    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }

    link.href = href;
  }
}

init();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

function setColors(rootElement: HTMLElement) {
  rootElement.style.setProperty(
    '--scrollbar-track-bg',
    colorsConfig.scrollbarTrackBackground
  );
  rootElement.style.setProperty(
    '--scrollbar-thumb-bg',
    colorsConfig.scrollbarThumbBackground
  );
  rootElement.style.setProperty(
    '--scrollbar-thumb-border',
    colorsConfig.scrollbarThumbBorder
  );
  rootElement.style.setProperty(
    '--scrollbar-thumb-hover-bg',
    colorsConfig.scrollbarThumbHover
  );
}
setColors(rootElement);

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
