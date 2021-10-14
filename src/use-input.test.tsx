import type { ReactElement } from 'react';
import { useInput } from '.';
import describeHook from './test-utils/describe-hook';
import mapValueToTestChangeEvent from './test-utils/map-value-to-test-change-event';

const TEST_VALUE = 'test value';

describeHook(useInput, (): ReactElement => <>{null}</>, [
  {
    args: [mapValueToTestChangeEvent(TEST_VALUE)],
    callback: 'onChange',
    defaultGetter: 'defaultValue',
    defaultValue: '',
    getter: 'value',
    handler: 'handleChange',
    setter: 'setValue',
    value: TEST_VALUE,
  },
]);
