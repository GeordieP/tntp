import browser from 'webextension-polyfill';

if (typeof browser === 'undefined') {
  throw new Error('WebExtension Browser API not present (did the polyfill load correctly?)');
}

// exports
export const setPages = pages => browser.storage.local.set({ pages });
export const getPages = () => browser.storage.local.get('pages');
