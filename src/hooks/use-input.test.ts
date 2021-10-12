import { renderHook } from '@testing-library/react-hooks';
import { useInput } from '..';

describe('useInput', (): void => {
  it('should not be implemented', (): void => {
    const { result } = renderHook(useInput);
    expect(result.current).toBeUndefined();
  });
});
