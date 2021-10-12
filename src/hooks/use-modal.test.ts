import { renderHook } from '@testing-library/react-hooks';
import { useModal } from '..';

describe('useModal', (): void => {
  it('should not be implemented', (): void => {
    const { result } = renderHook(useModal);
    expect(result.current).toBeUndefined();
  });
});
