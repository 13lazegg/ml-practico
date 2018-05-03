import * as React from 'react';
import '../../assets/css/pages/home/Home.css';

import SearchBar from '../../common/search/Search';
import { Iprops, Istate } from '../../interfaces/props';

class Detail extends React.Component<Iprops, Istate> {

  constructor(props: Iprops) {
    super(props)
  }
  public render() {
    return (
      <div className="Detail">
        <SearchBar />
      </div>
    );
  }
}

export default Detail;