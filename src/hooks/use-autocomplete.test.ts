import { renderHook } from '@testing-library/react-hooks';
import { useAutocomplete } from '..';

describe('useAutocomplete', (): void => {
  it('should not be implemented', (): void => {
    const { result } = renderHook(useAutocomplete);
    expect(result.current).toBeUndefined();
  });
});
