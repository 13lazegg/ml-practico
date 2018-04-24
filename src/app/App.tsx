import * as React from 'react';
import '../assets/css/app/App.css';

import logo from '../assets/images/logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="d-flex">
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae, laudantium vitae odit quam repudiandae sequi ducimus excepturi nesciunt at debitis soluta perspiciatis, quo autem maxime commodi ipsa quisquam quos.</div>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae, laudantium vitae odit quam repudiandae sequi ducimus excepturi nesciunt at debitis soluta perspiciatis, quo autem maxime commodi ipsa quisquam quos.</div>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae, laudantium vitae odit quam repudiandae sequi ducimus excepturi nesciunt at debitis soluta perspiciatis, quo autem maxime commodi ipsa quisquam quos.</div>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae, laudantium vitae odit quam repudiandae sequi ducimus excepturi nesciunt at debitis soluta perspiciatis, quo autem maxime commodi ipsa quisquam quos.</div>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae, laudantium vitae odit quam repudiandae sequi ducimus excepturi nesciunt at debitis soluta perspiciatis, quo autem maxime commodi ipsa quisquam quos.</div>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae, laudantium vitae odit quam repudiandae sequi ducimus excepturi nesciunt at debitis soluta perspiciatis, quo autem maxime commodi ipsa quisquam quos.</div>
        </div>
      </div>
    );
  }
}

export default App;
