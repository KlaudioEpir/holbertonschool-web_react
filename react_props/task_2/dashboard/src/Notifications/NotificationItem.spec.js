import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders the li with blue text and data-notification-type "default" when type is "default"', () => {
    const wrapper = shallow(<NotificationItem type="default" value="Test notification" />);
    const li = wrapper.find('li');

    expect(li.prop('style')).toHaveProperty('color', 'blue');
    expect(li.prop('data-notification-type')).toEqual('default');
  });

  it('renders the li with red text and data-notification-type "urgent" when type is "urgent"', () => {
    const wrapper = shallow(<NotificationItem type="urgent" value="Test notification" />);
    const li = wrapper.find('li');

    expect(li.prop('style')).toHaveProperty('color', 'red');
    expect(li.prop('data-notification-type')).toEqual('urgent');
  });
});