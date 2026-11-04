import { render, screen, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    render(<NotificationItem type="default" value="test" />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('renders correct attributes for type and value', () => {
    render(<NotificationItem type="urgent" value="Urgent notification" />);
    const listItem = screen.getByText('Urgent notification');
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveAttribute('data-notification-type', 'urgent');
  });

  it('renders correct html when html prop is passed', () => {
    const htmlObj = { __html: '<u>u test</u>' };
    render(<NotificationItem type="urgent" html={htmlObj} />);
    const listItem = screen.getByText('u test');
    expect(listItem).toBeInTheDocument();
  });

  it('calls markAsRead with correct id when clicked', () => {
    const markAsReadMock = jest.fn();
    render(<NotificationItem type="default" value="test" id={1} markAsRead={markAsReadMock} />);
    
    const listItem = screen.getByText('test');
    fireEvent.click(listItem);

    expect(markAsReadMock).toHaveBeenCalledWith(1);
  });
});
