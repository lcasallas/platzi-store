import React from 'react';
import { mount } from 'enzyme';

import Footer from '../../components/Footer';

describe('Test de Footer component', () => {
  test('Render componente Footer', () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  });
});
