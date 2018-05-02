import * as React from 'react';
import '../../assets/css/common/card/Card.css';

import { Iprops, Istate } from '../../interfaces/props';

class Breadcrumbs extends React.Component<Iprops, Istate> {

  constructor(props: Iprops) {
    super(props);
    this.state = {
      value: this.props.value
    }
    this.handleChange = this.handleChange.bind(this);
  }
  public render() {
    return <div>
            <p>{this.state.value.title}</p>
            <img src={this.state.value.thumbnail} />
          </div>
  }

  private handleChange(event: any) {
    this.setState({ value: event.target.value });
  }
}

export default Breadcrumbs;
