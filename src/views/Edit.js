import * as Surplus from 'surplus';
import { toggleEdit } from '../signals/router';
import { pages, addPage, deletePage, clearPages } from '../signals/pages';
import data from 'surplus-mixin-data';

const newPage = () => addPage('temp', 'https://google.ca', 'DodgerBlue');

export default () => (
  <div className='View EditView'>
    <a href='#' onClick={toggleEdit}>
      <h2 className='ToggleEditBtn light'>Save All</h2>
    </a>

    <h1 className='u-flexH u-spaceBetween'>
      <span>Edit Pages</span>
      <button onClick={clearPages}><b>Clear All Pages</b></button>
    </h1>

    <br />

    <table>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Color</th>
        <th>Delete</th>
      </tr>

      { pages.map(p => <EditRow page={p} onDelete={() => deletePage(p)} />) }
    </table>

    <button onClick={newPage}>
      <b>Add New Page...</b>
    </button>
  </div>
);

const EditRow = ({ page, onDelete }) => {
  const { name, url, color } = page;

  return (
    <tr className='EditRow'>
      <td>
        <input type='text' placeholder='Name' fn={data(name)} />
      </td>
      <td>
        <input type='text' placeholder='URL' fn={data(url)} />
      </td>
      <td>
        <input type='text' placeholder='Color' fn={data(color)} />
      </td>
      <td>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
}
