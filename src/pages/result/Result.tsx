import * as React from 'react';
import '../../assets/css/pages/result/Result.css';

import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import Card from '../../common/card/Card';
import SearchBar from '../../common/search/Search';

import { IitemResult, Iprops, Istate } from '../../interfaces/props';
import * as api from '../../services/Api';

class Result extends React.Component< Iprops, Istate > {
  
  private param: string[];
  private value: string;
  private loading: boolean;
  constructor(props: Iprops) {
    super(props);
    this.state = {
      filters: [],
      results: []
    };
    this.loading = true;
    if (this.props.location) {
      if (this.props.location.search) {
        this.param = this.props.location.search.split(';');
        this.param = this.param[0].split('?search=');
        this.value = this.param[1].replace(/\+/g, ' ');
        this.value = decodeURIComponent(this.value);
      }
    }
  }

  public render() {
    return (
      <div className="Result">
        <SearchBar value={this.value} />
        <div className="container">
          { this.state.filters.length ? <Breadcrumbs value={this.state.filters} /> : null }
          {this.state.results.length ? 
          (
            <ol className="itemsList">
            {this.state.results.map((item: IitemResult, i: number) => {
              return <Card value={item} key={i} />;
            })}
            </ol>
          ) : 
          ((this.state.results.length === 0 && !this.loading) ? 
              <span>No se encontraron Resultados</span> : 
              <span>Cargando...</span>) }
        </div>
      </div>
    );
  }

  public componentDidMount() {
    api.getItems(this.value).then((response => {
      this.loading = false;
      this.setState({
        filters: response.categories,
        results: response.items
      })
    }))
  }
}

export default Result;
