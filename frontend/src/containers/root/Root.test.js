import React from 'react';
import { mount } from 'enzyme';
import Root from './Root';

describe('<Root />', () => {
  it('should render successfully', () => {
    const wrapper = mount(<Root />);
    wrapper.unmount();
  })
})