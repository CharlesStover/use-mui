import { renderHook } from '@testing-library/react-hooks';
import { useDrawer } from '..';

describe('useDrawer', (): void => {
  it('should not be implemented', (): void => {
    const { result } = renderHook(useDrawer);
    expect(result.current).toBeUndefined();
  });
});
