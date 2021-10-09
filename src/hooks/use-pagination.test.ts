import { usePagination } from '..';
import describeGetter from '../test-utils/describe-getter';
import describeHandler from '../test-utils/describe-handler';
import describeSetter from '../test-utils/describe-setter';
import TestChangeEvent from '../test-utils/test-change-event';

const FIRST_PAGE = 0;
const SECOND_PAGE = 1;

describe('usePagination', (): void => {
  describeGetter(usePagination, 'page', FIRST_PAGE, 'defaultPage', SECOND_PAGE);
  describeSetter(usePagination, 'setPage', 'page', SECOND_PAGE);

  describeHandler(
    usePagination,
    'handleChange',
    [new TestChangeEvent(), SECOND_PAGE],
    'page',
    SECOND_PAGE,
    'onChange',
  );
});
