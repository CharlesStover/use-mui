import { renderHook } from '@testing-library/react-hooks';
import { useTablePagination } from '..';
import describeSetter from '../test-utils/describe-setter';

const FIRST_PAGE = 0;
const LIMITLESS = -1;
const SECOND_PAGE = 1;
const TEN = 10;

describe('useTablePagination', (): void => {
  describe('page', (): void => {
    it('should default to 0', (): void => {
      const { result } = renderHook(useTablePagination);
      expect(result.current.page).toBe(FIRST_PAGE);
    });

    it('should default to `defaultPage`', (): void => {
      const { result } = renderHook(useTablePagination, {
        initialProps: {
          defaultPage: SECOND_PAGE,
        },
      });
      expect(result.current.page).toBe(SECOND_PAGE);
    });
  });

  describe('rowsPerPage', (): void => {
    it('should default to -1', (): void => {
      const { result } = renderHook(useTablePagination);
      expect(result.current.rowsPerPage).toBe(LIMITLESS);
    });

    it('should default to `defaultRowsPerPage`', (): void => {
      const { result } = renderHook(useTablePagination, {
        initialProps: {
          defaultRowsPerPage: TEN,
        },
      });
      expect(result.current.rowsPerPage).toBe(TEN);
    });
  });

  describeSetter(useTablePagination, 'setPage', 'page', SECOND_PAGE);
  describeSetter(useTablePagination, 'setRowsPerPage', 'rowsPerPage', TEN);
});
