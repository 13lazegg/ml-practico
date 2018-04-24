import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './assets/css/index.css';
import Home from './home/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Home />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
