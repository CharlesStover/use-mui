import { useToggleButtonGroup } from '..';
import describeHook from '../test-utils/describe-hook';
import TestMouseEvent from '../test-utils/test-mouse-event';

const TEST_VALUE = 'test value';

describeHook(useToggleButtonGroup, [
  {
    args: [new TestMouseEvent(), TEST_VALUE],
    callback: 'onChange',
    defaultGetter: 'defaultValue',
    defaultValue: undefined,
    getter: 'value',
    handler: 'handleChange',
    setter: 'setValue',
    value: TEST_VALUE,
  },
]);
