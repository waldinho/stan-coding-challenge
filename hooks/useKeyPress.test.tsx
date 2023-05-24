import { renderHook, act } from '@testing-library/react-hooks';
import useKeypress from './useKeyPress';

describe('useKeypress', () => {
  test('calls action when the right arrow key is pressed', () => {
    const key = 37;
    const action = jest.fn();
    renderHook(() => useKeypress(key, action));
    act(() => {
      const event = new KeyboardEvent('keyup', { keyCode: key });
      window.dispatchEvent(event);
    });
    expect(action).toHaveBeenCalledTimes(1);
  });

  test('calls action when the left arrow key is pressed', () => {
    const key = 39;
    const action = jest.fn();
    renderHook(() => useKeypress(key, action));
    act(() => {
      const event = new KeyboardEvent('keyup', { keyCode: key });
      window.dispatchEvent(event);
    });
    expect(action).toHaveBeenCalledTimes(1);
  });

  test('calls action when the enter key is pressed', () => {
    const key = 13;
    const action = jest.fn();
    renderHook(() => useKeypress(key, action));
    act(() => {
      const event = new KeyboardEvent('keyup', { keyCode: key });
      window.dispatchEvent(event);
    });
    expect(action).toHaveBeenCalledTimes(1);
  });

  test('calls action when the backspace is pressed', () => {
    const key = 8;
    const action = jest.fn();
    renderHook(() => useKeypress(key, action));
    act(() => {
      const event = new KeyboardEvent('keyup', { keyCode: key });
      window.dispatchEvent(event);
    });
    expect(action).toHaveBeenCalledTimes(1);
  });

  test('does not call action when a different key is pressed', () => {
    const key = 37;
    const action = jest.fn();
    renderHook(() => useKeypress(key, action));
    act(() => {
      const event = new KeyboardEvent('keyup', { keyCode: 0 });
      window.dispatchEvent(event);
    });
    expect(action).not.toHaveBeenCalled();
  });
});