import S from 's-js';
import SArray from 's-array';
import * as storage from '../storage';

// return a new Page object with its properties as JSONable signals
const Page = (name, url, color) => ({
  name: jsonable(S.data(name)),
  url: jsonable(S.data(url)),
  color: jsonable(S.data(color)),
});

// pages signal
const pages = jsonable(SArray([]));

// get saved pages from browser storage and parse into Page objects,
// update the pages signal with the new data
storage.getPages().then(res => {
  if (res && res.pages) {
    const newPages = JSON.parse(res.pages)
      .map(p => Page(p.name, p.url, p.color));

    pages(newPages);
  }
}).catch(console.error);

// exports
export { pages };
export const addPage = (name, url, color) => pages.push(Page(name, url, color));
export const deletePage = p => confirm('Delete page?') ? pages.remove(p) : null;
export const clearPages = () => confirm('Delete all pages?') ? pages([]) : null;
export const savePages = () => storage.setPages(JSON.stringify(pages));

// JSON functions below from Surplus TODOMVC example by github/adamhaile
// https://github.com/adamhaile/surplus-todomvc/blob/master/src/models.ts#L29

function toJSON() {
  let json = this();
  if (json && json.toJSON) json = json.toJSON();
  return json;
}

function jsonable(s) {
  s.toJSON = toJSON.bind(s);
  return s;
}
