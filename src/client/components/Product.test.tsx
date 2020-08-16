import * as React from 'react';
import * as enzyme from 'enzyme';
import * as ReactDOM from 'react-dom';
import * as Adapter from 'enzyme-adapter-react-16';
import { Product, ProductItem } from './Product';

enzyme.configure({ adapter: new Adapter() });

const testProduct: ProductItem = {
  id: 1,
  name: 'test',
  description: 'testdesc',
  price: 999,
  filename: 'test.png',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Product product={testProduct} />, div);
});

it('shows the correct product information', () => {
  const product = enzyme.shallow(<Product product={testProduct} />);
  expect(product.find('.product-title').text()).toEqual('test');
});
