import { renderHook } from '@testing-library/react-hooks';
import { useDialog } from '..';

describe('useDialog', (): void => {
  it('should not be implemented', (): void => {
    const { result } = renderHook(useDialog);
    expect(result.current).toBeUndefined();
  });
});
