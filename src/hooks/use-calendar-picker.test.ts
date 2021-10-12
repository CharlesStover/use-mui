import { renderHook } from '@testing-library/react-hooks';
import { useCalendarPicker } from '..';

describe('useCalendarPicker', (): void => {
  it('should not be implemented', (): void => {
    const { result } = renderHook(useCalendarPicker);
    expect(result.current).toBeUndefined();
  });
});
