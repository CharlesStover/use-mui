import { renderHook } from '@testing-library/react-hooks';
import { useBottomNavigation } from '..';

describe('useBottomNavigation', (): void => {
  it('should not be implemented', (): void => {
    const { result } = renderHook(useBottomNavigation);
    expect(result.current).toBeUndefined();
  });
});
