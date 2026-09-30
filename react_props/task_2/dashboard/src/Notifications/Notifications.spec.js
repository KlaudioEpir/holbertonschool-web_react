import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    {
      id: 3,
      type: 'urgent',
      html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' },
    },
  ];

  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders 3 NotificationItem components when notifications prop is passed', () => {
    const wrapper = shallow(<Notifications notifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('displays the correct text for each notification through the notifications prop', () => {
    const wrapper = shallow(<Notifications notifications={listNotifications} />);
    const items = wrapper.find(NotificationItem);

    expect(items.at(0).prop('value')).toEqual('New course available');
    expect(items.at(1).prop('value')).toEqual('New resume available');
    expect(items.at(2).prop('html')).toEqual({
      __html: '<strong>Urgent requirement</strong> - complete by EOD',
    });
  });

  it('renders an empty list when no notifications prop is passed (default prop)', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(0);
  });
});