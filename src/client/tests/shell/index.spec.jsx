/* eslint-disable */

import React from 'react';
import { shallow, mount } from 'enzyme';

import Shell from '../../app/shell';
import SideNavigation from '../../app/shell/sideNavigation';

describe('<Shell />', () => {
  it('should render the SideNavigation component', () => {
    const wrapper = shallow(<Shell><input /></Shell>);
    expect(wrapper.find(SideNavigation)).to.have.length(1);
  });

  it('should require children', () => {
    sinon.stub(console, 'error');
    mount(<Shell />);

    sinon.assert.callCount(console.error, 1);
    sinon.assert.calledWithMatch(console.error, new RegExp('The prop `children` is marked as required in `Shell`'));

    console.error.restore();
  });
});
