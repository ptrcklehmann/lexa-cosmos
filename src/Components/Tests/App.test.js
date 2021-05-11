import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'


Enzyme.configure({ adapter: new Adapter() })

it('renders correctly enzyme', () => {
  const wrapper = shallow(<App />)

  expect(toJson(wrapper)).toMatchSnapshot();
});