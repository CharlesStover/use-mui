import { useTablePagination } from '.';
import describeHook from './test-utils/describe-hook';
import mapValueToTestChangeEvent from './test-utils/map-value-to-test-change-event';
import TestMouseEvent from './test-utils/test-mouse-event';

const TEST_PAGE = 1;
const TEST_ROWS_PER_PAGE = 10;

describeHook(useTablePagination, [
  {
    args: [new TestMouseEvent(), TEST_PAGE],
    callback: 'onPageChange',
    defaultGetter: 'defaultPage',
    defaultValue: 0,
    getter: 'page',
    handler: 'handlePageChange',
    setter: 'setPage',
    value: TEST_PAGE,
  },
  {
    defaultGetter: 'defaultRowsPerPage',
    defaultValue: -1,
    getter: 'rowsPerPage',
    setter: 'setRowsPerPage',
    value: TEST_ROWS_PER_PAGE,
  },
  {
    args: [mapValueToTestChangeEvent(TEST_ROWS_PER_PAGE.toString())],
    callback: 'onRowsPerPageChange',
    handler: 'handleRowsPerPageChange',
    props: {
      defaultPage: TEST_PAGE,
    },
    states: {
      page: 0,
      rowsPerPage: TEST_ROWS_PER_PAGE,
    },
  },
]);
