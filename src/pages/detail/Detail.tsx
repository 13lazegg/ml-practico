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
          {this.state.value ? <Breadcrumbs value={this.state.value.categories} /> : null}
          {(this.state.value) ? <div className="producto d-flex flex-column flex-lg-row">
            <div className="productDetail d-flex flex-column col-lg-8 col-md-12">
              {(this.state.value.items.picture) ? <img src={this.state.value.items.picture} alt={this.state.value.items.id} /> : null}
              {(this.state.value.items.description) ? <div className="descriptionProduct">
                <h1>Descripci&oacute;n del producto</h1>
                <p dangerouslySetInnerHTML={{ __html: this.state.value.items.description.replace(/(?:\r\n|\r|\n)/g, '<br>') }} />
              </div> : null}
            </div>
            <div className="d-flex flex-column col-lg-4 col-md-12">
              <span className="d-flex sold">{(this.state.value.items.condition === 'new') ? 'Nuevo' : 'Usado'} - {this.state.value.items.sold_quantity} {(this.state.value.items.sold_quantity > 1) ? 'vendidos' : 'vendido'} </span>
              <h1 className="title">{this.state.value.items.title}</h1>
              <span className="price d-flex align-items-start">$ {this.state.value.items.price.amount
                .toString()
                .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}<span>{(this.state.value.items.price.decimals) ? this.state.value.items.price.amount : '00'}</span></span>
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
        this.setState({
          value: response
        })
      }))
    }
  }
}

export default Detail;