import * as Surplus from 'surplus';
import { toggleEdit } from '../signals/router';

export default () => (
  <div>
    <a href='#' onClick={toggleEdit}>
      <h2>Details</h2>
    </a>

    <h4>Edit View</h4>
  </div>
);
