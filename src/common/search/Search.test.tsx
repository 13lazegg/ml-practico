import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SearchBar from './Search';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
