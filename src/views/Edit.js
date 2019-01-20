import * as Surplus from 'surplus';
import { toggleEdit } from '../signals/router';
import { pages, addPage, clearPages } from '../signals/pages';

const newPage = () => addPage('temp', 'https://google.ca', 'DodgerBlue');

export default () => (
  <div>
    <a href='#' onClick={toggleEdit}>
      <h2>Save All</h2>
    </a>

    <h4>Edit View</h4>
    <button onClick={newPage}>
      <b>Add New Page...</b>
    </button>

    <button onClick={clearPages}>
      <b>Clear All</b>
    </button>

    <br />

    { pages.map(p => <Tile page={p} key={p.name()} />) }
  </div>
);

const Tile = ({ page }) => {
  const { name, url, color } = page;
  const col = color();

  return (
    <a href={url()} className='Tile' style={{ color: col, borderColor: col }}>
      <br />
      {name()}
    </a>
  );
}
