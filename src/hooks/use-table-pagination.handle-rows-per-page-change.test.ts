import { act, renderHook } from '@testing-library/react-hooks';
import type { ChangeEvent } from 'react';
import { useTablePagination } from '..';
import TestChangeEvent from '../test-utils/test-change-event';

const FIRST_PAGE = 0;
const ONCE = 1;
const SECOND_PAGE = 1;
const TEN = 10;

describe('useTablePagination', (): void => {
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
});
