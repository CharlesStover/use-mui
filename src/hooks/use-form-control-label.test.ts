import { renderHook } from '@testing-library/react-hooks';
import { useFormControlLabel } from '..';

describe('useFormControlLabel', (): void => {
  it('should not be implemented', (): void => {
    const { result } = renderHook(useFormControlLabel);
    expect(result.current).toBeUndefined();
  });
});
