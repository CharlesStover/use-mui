import { useDataGridPro } from '.';
import describeHook from './test-utils/describe-hook';

const DEFAULT_PAGE = 0;
const DEFAULT_PAGE_SIZE = 10;
const TEST_ERROR: Error = new Error('test error message');
const TEST_PAGE = 2;
const TEST_PAGE_SIZE = 25;

describeHook(useDataGridPro, [
  {
    args: [TEST_ERROR],
    callback: 'onError',
    defaultGetter: 'defaultError',
    defaultValue: undefined,
    getter: 'error',
    handler: 'handleError',
    setter: 'setError',
    value: TEST_ERROR,
  },
  {
    args: ['___'],
    callback: 'onFilterModelChange',
    defaultGetter: 'defaultFilterModel',
    defaultValue: undefined,
    getter: 'filterModel',
    handler: 'handleFilterModelChange',
    setter: 'setFilterModel',
    value: '___',
  },
  {
    args: [TEST_PAGE],
    callback: 'onPageChange',
    defaultGetter: 'defaultPage',
    defaultValue: DEFAULT_PAGE,
    getter: 'page',
    handler: 'handlePageChange',
    setter: 'setPage',
    value: TEST_PAGE,
  },
  {
    args: [TEST_PAGE_SIZE],
    callback: 'onPageSizeChange',
    defaultGetter: 'defaultPageSize',
    defaultValue: DEFAULT_PAGE_SIZE,
    getter: 'pageSize',
    handler: 'handlePageSizeChange',
    setter: 'setPageSize',
    value: TEST_PAGE_SIZE,
  },
]);
