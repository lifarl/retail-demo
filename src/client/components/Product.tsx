import * as React from 'react';
import './Product.scss';

export interface ProductItem{
  id: number,
  name: string,
  description: string,
  price: number,
  filename: string
}

export interface ProductProps {
  product: ProductItem;
}

export class Product extends React.Component<ProductProps, {}> {
  render() {
    const imageUrl = `img/${this.props.product.filename}`;
    return (
      <div className="product-item">
        <div className="product-image">
          <img src={imageUrl} alt="" />
        </div>
        <div className="product-info">
          <h4 className="product-title">{this.props.product.name}</h4>
          <p className="product-description">{this.props.product.description}</p>
          <p className="product-price">
            {this.props.product.price}
            {' '}
            €
          </p>
        </div>
      </div>
    );
  }
}
