import * as React from 'react';
import '../../assets/css/common/breadcrumbs/Breadcrumbs.css';

import { IfiltersValues, Iprops, Istate } from '../../interfaces/props';

class Breadcrumbs extends React.Component<Iprops, Istate> {

  constructor(props: Iprops) {
    super(props);
    this.state = {
      value: this.props.value
    }
    this.handleChange = this.handleChange.bind(this);
  }
  public render() {
    let breadcrumbs: any;
    if (this.state.value.length){ 
      breadcrumbs = this.state.value[0].values[0].path_from_root.map((filter: IfiltersValues, i: number) => {
        const children = <li className="p-1" key={i}>{filter.name}</li>
        return children;
      })
    }else{
      breadcrumbs = this.state.value.path_from_root.map((filter: IfiltersValues, i: number) => {
        const children = <li className="p-1" key={i}>{filter.name}</li>
        return children;
      })
    }
    return (
      <ul className="Breadcrumbs d-flex flex-md-row flex-column jutify-content-center align-items-md-center">
        {breadcrumbs}
      </ul>
    );
  }
  
  private handleChange(event: any) {
    this.setState({ value: event.target.value });
  }
}

export default Breadcrumbs;
