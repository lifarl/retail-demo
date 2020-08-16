import * as React from 'react';
import * as _ from 'lodash';
import './ProductList.scss';
import { Product } from './Product';

interface ProductItem{
  id: number,
  name: string,
  description: string,
  price: number,
  filename: string
}

export interface ProductState{
  initialList: Array<ProductItem>;
  filteredList: Array<ProductItem>;
}

export class ProductList extends React.Component<{}, ProductState> {
  constructor(props: any) {
    super(props);
    this.state = {
      initialList: [],
      filteredList: [],
    };
  }

  async componentDidMount() {
    const req = require.context('../assets/img/smartphones', false, /.*\.(png|jpg|gif|jpeg)$/);
    req.keys().forEach((key:string) => {
      req(key);
    });

    try {
      const response = await fetch('/api/products');
      const product_response = await response.json();
      this.setState({
        initialList: product_response,
        filteredList: product_response,
      });
    } catch (error) {
      console.log(error);
    }
  }

  private filterByName(evt: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = evt.target.value.toLowerCase();
    let filtered = this.state.initialList;
    filtered = _.filter(filtered, (item) => item.name.toLowerCase().indexOf(searchValue) > -1);
    this.setState({ filteredList: filtered });
  }

  render() {
    return (
      <div className="product-page">
        <aside className="sidebar-left">
          <div className="filter-wrapper">
            <input
              type="text"
              placeholder="Suche"
              onChange={(evt) => this.filterByName(evt)}
            />
          </div>
        </aside>
        <div className="product-list">
          {this.state.filteredList.map((element: ProductItem) => (
            <div className="product-wrapper" key={element.id.toString()}>
              <Product product={element} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
