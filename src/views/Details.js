import * as Surplus from 'surplus';
import { toggleEdit } from '../signals/router';
import { pages } from '../signals/pages';

export default () => (
  <div>
    <a href='#' onClick={toggleEdit}>
      <h2>Edit</h2>
    </a>

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
