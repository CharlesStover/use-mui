import { useBottomNavigation } from '..';
import describeHook from '../test-utils/describe-hook';
import TestChangeEvent from '../test-utils/test-change-event';

const TEST_VALUE = 'test value';

describeHook(useBottomNavigation, [
  {
    args: [new TestChangeEvent(), TEST_VALUE],
    callback: 'onChange',
    defaultGetter: 'defaultValue',
    defaultValue: undefined,
    getter: 'value',
    handler: 'handleChange',
    setter: 'setValue',
    value: TEST_VALUE,
  },
]);
