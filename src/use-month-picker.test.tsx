import type { ReactElement } from 'react';
import { useMonthPicker } from '.';
import describeHook from './test-utils/describe-hook';

const TEST_DATE: Date = new Date();

describeHook(useMonthPicker, (): ReactElement => <>{null}</>, [
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