import type { ReactElement } from 'react';
import { useFormControlLabel } from '.';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

describeHook(useFormControlLabel, (): ReactElement => <>{null}</>, [
  {
    args: [new TestChangeEvent(), true],
    callback: 'onChange',
    defaultGetter: 'defaultChecked',
    defaultValue: false,
    getter: 'checked',
    handler: 'handleChange',
    setter: 'setChecked',
    value: true,
  },
]);
