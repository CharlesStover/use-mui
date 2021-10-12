import { renderHook } from '@testing-library/react-hooks';
import { useClockPicker } from '..';

describe('useClockPicker', (): void => {
  it('should not be implemented', (): void => {
    const { result } = renderHook(useClockPicker);
    expect(result.current).toBeUndefined();
  });
});
