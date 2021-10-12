import { renderHook } from '@testing-library/react-hooks';
import { useAccordion } from '..';

describe('useAccordion', (): void => {
  it('should not be implemented', (): void => {
    const { result } = renderHook(useAccordion);
    expect(result.current).toBeUndefined();
  });
});
