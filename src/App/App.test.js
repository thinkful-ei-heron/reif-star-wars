import React from 'react';
import Enzyme, { render, mount, shallow } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('Stuff gets rendered', () => {
  it('renders the app section', () => {
    const component = mount(<App />);
    expect(component.exists('#app')).toEqual(true);
  });

  it('renders the SearchForm', () => {
    const component = mount(<App />);
    expect(component.exists('.character-search-form')).toEqual(true);
  });
  it('renders loading-container when loading state changes', () => {
    const component = mount(<App />);
    component.setState({ loading: true });
    component.update();
    expect(component.exists('.loading-container')).toEqual(true);
  });
  it('does not render loading-container by default', () => {
    const component = mount(<App />);
    expect(component.exists('.loading-container')).toEqual(false);
  });
});
