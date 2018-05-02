import * as React from 'react';
import '../../assets/css/pages/result/Result.css';

import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import SearchBar from '../../common/search/Search';

import { Ifilters, Iprops, Istate } from '../../interfaces/props';

class Result extends React.Component< Iprops, Istate > {
  
  public filters: Ifilters[];
  private param: string[];
  private value: string;
  constructor(props: Iprops) {
    super(props);
    if (this.props.location) {
      if (this.props.location.search) {
        this.param = this.props.location.search.split(';');
        this.param = this.param[0].split('?search=');
        this.value = this.param[1].replace(/\+/g, ' ');
        this.value = decodeURIComponent(this.value);
        this.filters = [
          {
            id: 'category',
            name: 'Categories',
            type: 'text',
            values: [
              {
                id: 'MLA7262',
                name: 'Reproductores',
                path_from_root: [
                  {
                    id: 'MLA1000',
                    name: 'Electrónica, Audio y Video'
                  },
                  {
                    id: 'MLA409810',
                    name: 'Audio'
                  },
                  {
                    id: 'MLA1012',
                    name: 'Audio Portátil y Radios'
                  },
                  {
                    id: 'MLA6205',
                    name: 'iPod'
                  },
                  {
                    id: 'MLA7262',
                    name: 'Reproductores'
                  }
                ]
              }
            ]
          }
        ];
      }
    }
  }

  public render() {
    return (
      <div className="Result">
        <SearchBar value={this.value} />
        <div className="container">
          <Breadcrumbs value={this.filters} />
        </div>
      </div>
    );
  }
}

export default Result;
