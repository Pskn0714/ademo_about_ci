import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
    it('should initialize with default count = 0 and val = 1', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toBe(0);
        expect(result.current.val).toBe(1);
    });

    it('should increment the count by val (default 1)', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
    });

    it('should increment by new val when setVal is called', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.setVal(5); // set increment value
            result.current.increment();
        });
        expect(result.current.count).toBe(5);
    });
});
