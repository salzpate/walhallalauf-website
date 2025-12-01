import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { createRef } from 'react';
import { useFocusTrap } from './useFocusTrap';

describe('useFocusTrap', () => {
  let container: HTMLDivElement;
  let button1: HTMLButtonElement;
  let button2: HTMLButtonElement;
  let button3: HTMLButtonElement;

  beforeEach(() => {
    container = document.createElement('div');
    button1 = document.createElement('button');
    button2 = document.createElement('button');
    button3 = document.createElement('button');

    container.appendChild(button1);
    container.appendChild(button2);
    container.appendChild(button3);
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  it('should not trap focus when isActive is false', () => {
    const ref = createRef<HTMLDivElement>();
    Object.defineProperty(ref, 'current', { value: container, writable: true });

    renderHook(() => useFocusTrap(false, ref));

    const event = new KeyboardEvent('keydown', { key: 'Tab' });
    document.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(false);
  });

  it('should call onEscape when Escape is pressed', () => {
    const onEscape = vi.fn();
    const ref = createRef<HTMLDivElement>();
    Object.defineProperty(ref, 'current', { value: container, writable: true });

    renderHook(() => useFocusTrap(true, ref, onEscape));

    const event = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
    document.dispatchEvent(event);

    expect(onEscape).toHaveBeenCalled();
  });

  it('should trap focus on Tab from last element', () => {
    const ref = createRef<HTMLDivElement>();
    Object.defineProperty(ref, 'current', { value: container, writable: true });

    renderHook(() => useFocusTrap(true, ref));

    button3.focus();
    expect(document.activeElement).toBe(button3);

    const event = new KeyboardEvent('keydown', {
      key: 'Tab',
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(event);

    // Focus should move to first element (mocked by preventDefault)
    expect(event.defaultPrevented).toBe(true);
  });

  it('should trap focus on Shift+Tab from first element', () => {
    const ref = createRef<HTMLDivElement>();
    Object.defineProperty(ref, 'current', { value: container, writable: true });

    renderHook(() => useFocusTrap(true, ref));

    button1.focus();
    expect(document.activeElement).toBe(button1);

    const event = new KeyboardEvent('keydown', {
      key: 'Tab',
      bubbles: true,
      shiftKey: true,
      cancelable: true,
    });
    document.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(true);
  });

  it('should cleanup event listener on unmount', () => {
    const ref = createRef<HTMLDivElement>();
    Object.defineProperty(ref, 'current', { value: container, writable: true });

    const { unmount } = renderHook(() => useFocusTrap(true, ref));

    unmount();

    const event = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true });
    document.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(false);
  });
});
