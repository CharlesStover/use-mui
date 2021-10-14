import type { ReactElement } from 'react';
import { useTabs } from '.';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

const TEST_VALUE = 99;

describeHook(useTabs, (): ReactElement => <>{null}</>, [
  {
    args: [new TestChangeEvent(), TEST_VALUE],
    callback: 'onChange',
    defaultGetter: 'defaultValue',
    defaultValue: false,
    getter: 'value',
    handler: 'handleChange',
    setter: 'setValue',
    value: TEST_VALUE,
  },
]);
