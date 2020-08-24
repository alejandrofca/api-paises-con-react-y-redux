import React from 'react'
import App from './App'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
import CountryList from './country-list';
import Country from './country';

configure({ adapter: new Adapter() });

test('Contiene país México', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.contains("México"));
});
test('Se creó la lista de paises', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find( CountryList ).length).toBe(1)
});

