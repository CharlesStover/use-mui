import { renderHook } from '@testing-library/react-hooks';
import { useDataGridPro } from '..';

describe('useDataGridPro', (): void => {
  it('should not be implemented', (): void => {
    const { result } = renderHook(useDataGridPro);
    expect(result.current).toBeUndefined();
  });
});
