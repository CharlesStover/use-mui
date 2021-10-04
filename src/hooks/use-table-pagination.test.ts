import { act, renderHook } from '@testing-library/react-hooks';
import { useTablePagination } from '..';

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

  describe('setPage', (): void => {
    it('should set `page`', (): void => {
      const { result } = renderHook(useTablePagination);
      expect(result.current.page).not.toBe(SECOND_PAGE);
      act((): void => {
        result.current.setPage(SECOND_PAGE);
      });
      expect(result.current.page).toBe(SECOND_PAGE);
    });
  });

  describe('setRowsPerPage', (): void => {
    it('should set `rowsPerPage`', (): void => {
      const { result } = renderHook(useTablePagination);
      expect(result.current.rowsPerPage).not.toBe(TEN);
      act((): void => {
        result.current.setRowsPerPage(TEN);
      });
      expect(result.current.rowsPerPage).toBe(TEN);
    });
  });
});
