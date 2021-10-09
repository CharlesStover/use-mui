import { useTablePagination } from '..';
import describeGetter from '../test-utils/describe-getter';
import describeSetter from '../test-utils/describe-setter';

const FIRST_PAGE = 0;
const LIMITLESS = -1;
const SECOND_PAGE = 1;
const TEN = 10;

describe('useTablePagination', (): void => {
  describeSetter(useTablePagination, 'setPage', 'page', SECOND_PAGE);
  describeSetter(useTablePagination, 'setRowsPerPage', 'rowsPerPage', TEN);

  describeGetter(
    useTablePagination,
    'page',
    FIRST_PAGE,
    'defaultPage',
    SECOND_PAGE,
  );

  describeGetter(
    useTablePagination,
    'rowsPerPage',
    LIMITLESS,
    'defaultRowsPerPage',
    TEN,
  );
});
