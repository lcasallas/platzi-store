import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Product from '../../components/Product';
import ProductMock from '../../__mocks__/ProductMock';

describe('Pruebas <Producto />', () => {
  test('Render del componente <Product />', () => {
    const producto = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(producto.length).toEqual(1);
  });

  test('Comprobar el boton de comprar', () => {
    const handleAddToCar = jest.fn();
    const wrapper = mount(<ProviderMock><Product product={ProductMock} handleAddToCart={handleAddToCar} /></ProviderMock>);
    wrapper.find('button').simulate('click');
    expect(handleAddToCar).toHaveBeenCalledTimes(1);
  });
});
