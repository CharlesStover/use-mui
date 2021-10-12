import { renderHook } from '@testing-library/react-hooks';
import { useCheckbox } from '..';

describe('useCheckbox', (): void => {
  it('should not be implemented', (): void => {
    const { result } = renderHook(useCheckbox);
    expect(result.current).toBeUndefined();
  });
});
