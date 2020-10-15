import React from 'react';
import { shallow } from './enzyme';
import InvalidState from '../components/InvalidState';

describe('Invalid State component is well when', () => {
  it('renders the container and its children', () => {
    const wrapper = shallow(<InvalidState text="This is an invalid state" subtext="Try again" />);
    expect(wrapper.find('*').length).toEqual(4);
  });

  it('renders the illustration', () => {
    const wrapper = shallow(<InvalidState text="This is an invalid state" subtext="Try again" />);
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('renders text content', () => {
    const wrapper = shallow(<InvalidState text="This is an invalid state" subtext="Try again" />);
    const textElement = <div className="invalid-state-text">This is an invalid state</div>;
    expect(wrapper.contains(textElement)).toBeTruthy();
  });

  it('renders subtext content', () => {
    const wrapper = shallow(<InvalidState text="This is an invalid state" subtext="Try again" />);
    const subtextElement = <div className="invalid-state-subtext">Try again</div>;
    expect(wrapper.contains(subtextElement)).toBeTruthy();
  });
});
