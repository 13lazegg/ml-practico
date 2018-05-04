import * as React from 'react';
import '../../assets/css/pages/detail/Detail.css';

import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import SearchBar from '../../common/search/Search';
import { Iprops, Istate } from '../../interfaces/props';

import * as api from '../../services/Api';
class Detail extends React.Component<Iprops, Istate> {

  private loading: boolean;

  constructor(props: Iprops) {
    super(props)
    this.loading = true;
    this.state = {
      description: null,
      filters: null,
      value: null
    }
    if (!this.loading) {
      return;
    }
  }
  public render() {
    return (
      <div className="Detail">
        <SearchBar />
        <div className="container">
          {this.state.filters ? <Breadcrumbs value={this.state.filters} /> : null}
          {(this.state.value) ? <div className="producto d-flex flex-column flex-lg-row">
            <div className="productDetail d-flex flex-column col-lg-8 col-md-12">
              {(this.state.value.pictures.length) ? <img src={this.state.value.pictures[0].url} alt={this.state.value.pictures[0].id} /> : null}
              {(this.state.description) ? ((this.state.description.plain_text) ? <div className="descriptionProduct">
                <h1>Descripci&oacute;n del producto</h1>
                <p dangerouslySetInnerHTML={{ __html: this.state.description.plain_text.replace(/(?:\r\n|\r|\n)/g, '<br>') }} />
              </div> : null) : null}
            </div>
            <div className="d-flex flex-column col-lg-4 col-md-12">
              <span className="d-flex sold">{(this.state.value.condition === 'new') ? 'Nuevo' : 'Usado'} - {this.state.value.sold_quantity} {(this.state.value.sold_quantity > 1) ? 'vendidos' : 'vendido'} </span>
              <h1 className="title">{this.state.value.title}</h1>
              <span className="price d-flex align-items-start" dangerouslySetInnerHTML={{
                __html: '$ ' + this.state.value.price
                    .toFixed(2)
                    .toString()
                    .replace(".", "<span>")
                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + '</span>'}} />
              <button className="buy">Comprar</button>
            </div>
          </div> : null}
        </div>
      </div>
    );
  }

  public componentDidMount() {
    if (this.props.match){
      api.getItemById(this.props.match.params.id).then((response => {
        // tslint:disable-next-line:no-console
        console.log(response);
        this.setState({
          value: response
        })
        api.getItemDescriptionById(response.id).then((resonseDescription => {
          // tslint:disable-next-line:no-console
          console.log(resonseDescription);
          this.setState({
            description: resonseDescription
          })
          api.getItemCategoryById(response.category_id).then((responseFilters => {
            // tslint:disable-next-line:no-console
            console.log(responseFilters);
            this.loading = false;
            this.setState({
              filters: responseFilters
            })
          }))
        }))
      }))
    }
  }
}

export default Detail;