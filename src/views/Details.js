import * as Surplus from 'surplus';
import { toggleEdit } from '../signals/router';

export default () => (
  <div>
    <a href='#' onClick={toggleEdit}>
      <h2>Edit</h2>
    </a>

    <h4>Details View</h4>
  </div>
);
