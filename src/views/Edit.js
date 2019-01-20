import * as Surplus from 'surplus';
import { toggleEdit } from '../signals/router';
import { pages, addPage, deletePage, clearPages } from '../signals/pages';
import data from 'surplus-mixin-data';

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

    { pages.map(p => <EditRow page={p} onDelete={() => deletePage(p)}/>) }
  </div>
);

const EditRow = ({ page, onDelete }) => {
  const { name, url, color } = page;

  return (
    <div>
      <input type='text' placeholder='Name' fn={data(name)} />
      <input type='text' placeholder='URL' fn={data(url)} />
      <input type='text' placeholder='Color' fn={data(color)} />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
