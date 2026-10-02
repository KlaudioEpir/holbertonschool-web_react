import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

describe('App Component - Lifecycle & Key Events', () => {
  let container = null;
  let alertSpy = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    alertSpy.mockRestore();
  });

  test('verifies that when Ctrl + h keys are pressed, logOut prop is called once', () => {
    const logOutMock = jest.fn();

    act(() => {
      render(<App logOut={logOutMock} />, container);
    });

    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true,
      bubbles: true,
    });

    act(() => {
      window.dispatchEvent(event);
    });

    expect(logOutMock).toHaveBeenCalledTimes(1);
  });

  test('verifies that alert is called with "Logging you out" when Ctrl + h are pressed', () => {
    const logOutMock = jest.fn();

    act(() => {
      render(<App logOut={logOutMock} />, container);
    });

    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true,
      bubbles: true,
    });

    act(() => {
      window.dispatchEvent(event);
    });

    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
  });
});
