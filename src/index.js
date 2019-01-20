import * as Surplus from 'surplus';
import S from 's-js';

const App = () => (
  <main>
    <h1>App</h1>
  </main>
);

S.root(() => {
  document.body.appendChild(<App />);
});
