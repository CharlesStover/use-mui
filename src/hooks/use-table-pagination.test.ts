import { act, renderHook } from '@testing-library/react-hooks';
import type { ChangeEvent, MouseEvent } from 'react';
import { useTablePagination } from '..';
import TestChangeEvent from '../test-utils/test-change-event';
import TestMouseEvent from '../test-utils/test-mouse-event';

const FIRST_PAGE = 0;
const LIMITLESS = -1;
const ONCE = 1;
const SECOND_PAGE = 1;
const TEN = 10;

describe('useTablePagination', (): void => {
  describe('handlePageChange', (): void => {
    it('should change `page`', (): void => {
      const { result } = renderHook(useTablePagination);
      expect(result.current.page).not.toBe(SECOND_PAGE);
      act((): void => {
        result.current.handlePageChange(new TestMouseEvent(), SECOND_PAGE);
      });
      expect(result.current.page).toBe(SECOND_PAGE);
    });

    it('should fire the `onPageChange` callback', (): void => {
      const TEST_CHANGE_HANDLER = jest.fn();
      const TEST_EVENT: MouseEvent<HTMLButtonElement> = new TestMouseEvent();

      const { result } = renderHook(useTablePagination, {
        initialProps: {
          onPageChange: TEST_CHANGE_HANDLER,
        },
      });

      act((): void => {
        result.current.handlePageChange(TEST_EVENT, SECOND_PAGE);
      });

      expect(TEST_CHANGE_HANDLER).toHaveBeenCalledTimes(ONCE);
      expect(TEST_CHANGE_HANDLER).toHaveBeenLastCalledWith(
        TEST_EVENT,
        SECOND_PAGE,
      );
    });
  });

  describe('handleRowsPerPageChange', (): void => {
    it('should set `page` to 0', (): void => {
      const { result } = renderHook(useTablePagination, {
        initialProps: {
          defaultPage: SECOND_PAGE,
        },
      });

      expect(result.current.page).not.toBe(FIRST_PAGE);

      act((): void => {
        const input: HTMLInputElement = document.createElement('input');
        input.setAttribute('value', '10');
        result.current.handleRowsPerPageChange(new TestChangeEvent(input));
      });

      expect(result.current.page).toBe(FIRST_PAGE);
    });

    it('should change `rowsPerPage`', (): void => {
      const { result } = renderHook(useTablePagination);

      expect(result.current.rowsPerPage).not.toBe(TEN);

      act((): void => {
        const input: HTMLInputElement = document.createElement('input');
        input.setAttribute('value', '10');
        result.current.handleRowsPerPageChange(new TestChangeEvent(input));
      });

      expect(result.current.rowsPerPage).toBe(TEN);
    });

    it('should fire the `onRowsPerPageChange` callback', (): void => {
      const TEST_ROWS_PER_PAGE_CHANGE_HANDLER = jest.fn();
      const TEST_EVENT: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> =
        new TestChangeEvent();

      const { result } = renderHook(useTablePagination, {
        initialProps: {
          onRowsPerPageChange: TEST_ROWS_PER_PAGE_CHANGE_HANDLER,
        },
      });

      act((): void => {
        result.current.handleRowsPerPageChange(TEST_EVENT);
      });

      expect(TEST_ROWS_PER_PAGE_CHANGE_HANDLER).toHaveBeenCalledTimes(ONCE);
      expect(TEST_ROWS_PER_PAGE_CHANGE_HANDLER).toHaveBeenLastCalledWith(
        TEST_EVENT,
      );
    });
  });

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
