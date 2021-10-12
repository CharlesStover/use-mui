import { renderHook } from '@testing-library/react-hooks';
import { useMenu } from '..';

describe('useMenu', (): void => {
  it('should not be implemented', (): void => {
    const { result } = renderHook(useMenu);
    expect(result.current).toBeUndefined();
  });
});
