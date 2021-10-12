import type { SyntheticEvent } from 'react';
import { useNativeSelect } from '..';
import describeHook from '../test-utils/describe-hook';
import mapValueToTestChangeEvent from '../test-utils/map-value-to-test-change-event';

const TEST_VALUE = 'test value';
const TEST_CHANGE_EVENT: SyntheticEvent = mapValueToTestChangeEvent(TEST_VALUE);

describeHook(useNativeSelect, [
  {
    args: [TEST_CHANGE_EVENT],
    callback: 'onChange',
    defaultGetter: 'defaultValue',
    defaultValue: '',
    getter: 'value',
    handler: 'handleChange',
    setter: 'setValue',
    value: TEST_VALUE,
  },
]);
