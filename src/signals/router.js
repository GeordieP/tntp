import S from 's-js';

// components
import Details from '../views/Details';
import Edit from '../views/Edit';

// define app routes
const routes = ({
  '/': Details,
  '/edit': Edit,
});

// route signal
const location = S.value('/');

// router component
export const Router = () => routes[location()];

// call this fn to navigate back and forth between our two routes
export const toggleEdit = () => {
  // nav from home to edit
  if (location() === '/') {
    location('/edit');
    return;
  }

  // nav from edit to home
  location('/');
}
