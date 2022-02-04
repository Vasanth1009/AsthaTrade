import ReactDOM from 'react-dom';
import { IconContext } from 'react-icons';

import App from './App';
import './style.scss';

ReactDOM.render(
  <IconContext.Provider value={{ className: 'react-icons' }}>
    <App />
  </IconContext.Provider>,
  document.getElementById('root')
);
