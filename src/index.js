import * as Surplus from 'surplus';
import S from 's-js';
import { Router } from './signals/router';

const App = () => (
  <main>
    <Router />
  </main>
);

S.root(() => {
  document.body.appendChild(<App />);
});
