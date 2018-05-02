import * as React from 'react';
import '../../assets/css/pages/home/Home.css';

import SearchBar from '../../common/search/Search';
import { Iprops, Istate } from '../../interfaces/props';

class Home extends React.Component<Iprops, Istate> {

  constructor(props: Iprops) {
    super(props)
  }
  public render() {
    return (
      <div className="Home">
        <SearchBar />
      </div>
    );
  }
}

export default Home;
