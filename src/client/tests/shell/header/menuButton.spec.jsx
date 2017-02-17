/* eslint-disable*/

import React from 'react';
import { shallow } from 'enzyme';

import MenuButton from '../../../app/shell/header/menuButton';
import NavigationStore from '../../../app/stores/navigation';

describe('<MenuButton />', () => {
  it('should add is-active on button click and remove on subsequent click', () => {
    const wrapper = shallow(<MenuButton />);

    wrapper.find('button').simulate('click');
    expect(wrapper.find('button.is-active').length).to.equal(1);

    wrapper.find('button.is-active').simulate('click');
    expect(wrapper.find('button.is-active').length).to.equal(0);
  });

  it('should invert the observable isOpen on button click', () => {
    const wrapper = shallow(<MenuButton />);

     expect(NavigationStore.isOpen).to.equal(false);
     wrapper.find('button').simulate('click');
     expect(NavigationStore.isOpen).to.equal(true);
  });
});