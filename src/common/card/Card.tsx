import * as React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/common/card/Card.css';

import { Iprops, Istate } from '../../interfaces/props';

import icon from '../../assets/images/ic_shipping@2x.png.png.png';

class Breadcrumbs extends React.Component<Iprops, Istate> {

  constructor(props: Iprops) {
    super(props);
    this.state = {
      value: this.props.value
    }
    this.handleChange = this.handleChange.bind(this);
  }
  public render() {
    return <li className="search-results">
              {(this.state.value) ?
                <div className="item-container">
                  <div className="detail d-flex flex-md-row flex-column align-items-lg-start align-items-center">
                    <img src={this.state.value.thumbnail} />
                    <div className="d-flex flex-column justify-content-center data p-4">
                      <div className="d-flex align-items-center">
                        <span className="price">$ {this.state.value.price
                        .toFixed(2)
                        .toString()
                        .replace(".", ",")
                        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")} {this.state.value.shipping.free_shipping ? <img className="shipping" src={icon} /> : null}</span>
                        <span className="ml-auto p-2 address">{this.state.value.address.state_name}</span>
                      </div>
                      <Link className="title" to={"/items/"+this.state.value.id}>{this.state.value.title}</Link>
                    </div>
                  </div>
                </div>
              : null}
            </li>
  }

  private handleChange(event: any) {
    this.setState({ value: event.target.value });
  }
}

export default Breadcrumbs;
