import { act, renderHook } from '@testing-library/react-hooks';
import { useTablePagination } from '..';
import describeHook from '../test-utils/describe-hook';
import mapValueToTestChangeEvent from '../test-utils/map-value-to-test-change-event';
import type TestChangeEvent from '../test-utils/test-change-event';
import TestMouseEvent from '../test-utils/test-mouse-event';

const FIRST_PAGE = 0;
const LIMITLESS = -1;
const SECOND_PAGE = 1;
const TEN = 10;

const TEST_ROWS_PER_PAGE_CHANGE_EVENT: TestChangeEvent<HTMLInputElement> =
  mapValueToTestChangeEvent(TEN.toString());

describeHook(
  useTablePagination,
  [
    {
      args: [new TestMouseEvent(), SECOND_PAGE],
      callback: 'onPageChange',
      defaultGetter: 'defaultPage',
      defaultValue: FIRST_PAGE,
      getter: 'page',
      handler: 'handlePageChange',
      setter: 'setPage',
      value: SECOND_PAGE,
    },
    {
      args: [TEST_ROWS_PER_PAGE_CHANGE_EVENT],
      callback: 'onRowsPerPageChange',
      defaultGetter: 'defaultRowsPerPage',
      defaultValue: LIMITLESS,
      getter: 'rowsPerPage',
      handler: 'handleRowsPerPageChange',
      setter: 'setRowsPerPage',
      value: TEN,
    },
  ],
  (): void => {
    it('should set `page` to 0 when handling `rowsPerPage` change', (): void => {
      const { result } = renderHook(useTablePagination, {
        initialProps: {
          defaultPage: SECOND_PAGE,
        },
      });

      expect(result.current.page).not.toBe(FIRST_PAGE);

      act((): void => {
        result.current.handleRowsPerPageChange(TEST_ROWS_PER_PAGE_CHANGE_EVENT);
      });

      expect(result.current.page).toBe(FIRST_PAGE);
    });
  },
);
