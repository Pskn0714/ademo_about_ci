import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
    it('should initialize with default value', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toBe(0);
    });

    it('should increment the count', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
    });

    it('should decrement the count', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.decrement();
        });
        expect(result.current.count).toBe(-1);
    });

    it('should reset the count', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
            result.current.reset();
        });
        expect(result.current.count).toBe(0);
    });
});