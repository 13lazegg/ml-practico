import * as React from 'react';
import '../../assets/css/common/search/Search.css';

import icon from '../../assets/images/ic_Search.png';
import logo from '../../assets/images/Logo_ML.png';

import { Iprops, Istate } from '../../interfaces/props';

class SearchBar extends React.Component<Iprops, Istate> {

  constructor(props: Iprops) {
    super(props);
    this.state = {
      value: this.props.value
    }
    this.handleChange = this.handleChange.bind(this);
  }
  public render() {
    return (
      <div className="SearchBar d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center">
          <img className="mr-auto" src={logo} alt="MercadoLibre"/>
          <form action="/items" className="SearchForm d-flex justify-content-center align-items-center">
            <input className="SearchInput" name="search" type="text" placeholder="Nunca dejes de buscar" value={this.state.value} onChange={this.handleChange} />
            <button className="SearchSubmit d-flex justify-content-center align-items-center" type="submit">
              <img src={icon} alt="Search"/>
            </button>
          </form>
        </div>
      </div>
    );
  }

  private handleChange(event: any) {
    this.setState({ value: event.target.value });
  }
}

export default SearchBar;
