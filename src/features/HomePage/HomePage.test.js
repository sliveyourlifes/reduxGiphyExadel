import React from 'react';
import {shallow, render} from "enzyme";
import renderer from 'react-test-renderer';
import {HomePage} from './HomePage';

it('should render error', () => {
    const wrapper = shallow(
        <HomePage loadTrending={jest.fn()}/>
    );

    expect(wrapper.find('.error').length).toBe(0);

    wrapper.setProps({
        error: 'An error'
    });

    const error = wrapper.find('.error');
    expect(error.length).toBe(1);
    expect(error.text()).toBe('An error');
});