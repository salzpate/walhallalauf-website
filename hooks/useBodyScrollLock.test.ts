import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useBodyScrollLock } from './useBodyScrollLock';

describe('useBodyScrollLock', () => {
  beforeEach(() => {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    window.scrollTo = vi.fn();
  });

  it('should not lock scroll when isLocked is false', () => {
    renderHook(() => useBodyScrollLock(false));

    expect(document.body.style.position).toBe('');
    expect(document.body.style.overflow).toBe('');
  });

  it('should lock scroll when isLocked is true', () => {
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });

    renderHook(() => useBodyScrollLock(true));

    expect(document.body.style.position).toBe('fixed');
    expect(document.body.style.top).toBe('-100px');
    expect(document.body.style.width).toBe('100%');
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should restore scroll position on cleanup', () => {
    Object.defineProperty(window, 'scrollY', { value: 200, writable: true });

    const { unmount } = renderHook(() => useBodyScrollLock(true));

    expect(document.body.style.position).toBe('fixed');

    unmount();

    expect(document.body.style.position).toBe('');
    expect(document.body.style.top).toBe('');
    expect(document.body.style.width).toBe('');
    expect(document.body.style.overflow).toBe('');
    expect(window.scrollTo).toHaveBeenCalledWith(0, 200);
  });

  it('should update when isLocked changes', () => {
    Object.defineProperty(window, 'scrollY', { value: 50, writable: true });

    const { rerender } = renderHook(({ locked }) => useBodyScrollLock(locked), {
      initialProps: { locked: false },
    });

    expect(document.body.style.position).toBe('');

    rerender({ locked: true });

    expect(document.body.style.position).toBe('fixed');
    expect(document.body.style.top).toBe('-50px');
  });
});
