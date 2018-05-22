import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Product, ProductItem } from './Product';

const testProduct: ProductItem = {
    id: 1,
    name: "test",
    description: "testdesc",
    price: 999,
    filename: "test.png"
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Product product={testProduct}/>, div);
});