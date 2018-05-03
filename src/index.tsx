import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/css/index.css';
import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';
import Result from './pages/result/Result';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/items" component={Result} />
      <Route exact={true} path="/items/:id" component={Detail} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root') as HTMLElement);
registerServiceWorker();
