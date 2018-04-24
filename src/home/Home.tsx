import * as React from 'react';
import '../assets/css/home/Home.css';

import SearchBar from '../common/search/Search';

class Home extends React.Component {
  public render() {
    return (
      <div className="App">
        <SearchBar />
        <p className="App-intro">
          To get started, edit <code>src/Home.tsx</code> and save to reload.
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

export default Home;
