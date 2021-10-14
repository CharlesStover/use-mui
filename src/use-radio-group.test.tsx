import type { ReactElement } from 'react';
import { useRadioGroup } from '.';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

describeHook(useRadioGroup, (): ReactElement => <>{null}</>, [
  {
    args: [new TestChangeEvent(), 'test value'],
    callback: 'onChange',
    defaultGetter: 'defaultValue',
    defaultValue: '',
    getter: 'value',
    handler: 'handleChange',
    setter: 'setValue',
    value: 'test value',
  },
]);
