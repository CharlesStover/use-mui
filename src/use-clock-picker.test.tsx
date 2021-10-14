import type { ReactElement } from 'react';
import { useClockPicker } from '.';
import describeHook from './test-utils/describe-hook';

const TEST_DATE: Date = new Date();

describeHook(useClockPicker, (): ReactElement => <>{null}</>, [
  {
    args: [TEST_DATE],
    callback: 'onChange',
    defaultGetter: 'defaultDate',
    defaultValue: undefined,
    getter: 'date',
    handler: 'handleChange',
    setter: 'setDate',
    value: TEST_DATE,
  },
]);
