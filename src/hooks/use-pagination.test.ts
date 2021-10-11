import { usePagination } from '..';
import describeHook from '../test-utils/describe-hook';
import TestChangeEvent from '../test-utils/test-change-event';

const FIRST_PAGE = 0;
const SECOND_PAGE = 1;

describeHook(usePagination, [
  {
    args: [new TestChangeEvent(), SECOND_PAGE],
    callback: 'onChange',
    defaultGetter: 'defaultPage',
    defaultValue: FIRST_PAGE,
    getter: 'page',
    handler: 'handleChange',
    setter: 'setPage',
    value: SECOND_PAGE,
  },
]);
