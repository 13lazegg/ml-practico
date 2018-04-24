import * as React from 'react';
import '../../assets/css/common/search/Search.css';

import icon from '../../assets/images/ic_Search.png';
import logo from '../../assets/images/Logo_ML.png';

class SearchBar extends React.Component {
  public render() {
    return (
      <div className="SearchBar d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center">
          <img className="mr-auto" src={logo} alt="MercadoLibre"/>
          <form action="" className="SearchForm d-flex justify-content-center align-items-center">
            <input className="SearchInput" type="text" placeholder="Nunca dejes de buscar" />
            <button className="SearchSubmit d-flex justify-content-center align-items-center" type="submit">
              <img src={icon} alt="Search"/>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
