import RadioGroup from '@mui/material/RadioGroup';
import type { ReactElement } from 'react';
import type { RadioGroupState } from '.';
import { useRadioGroup } from '.';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

describeHook(
  useRadioGroup,
  ({ handleChange, value }: RadioGroupState): ReactElement => (
    <RadioGroup onChange={handleChange} value={value} />
  ),
  [
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
  ],
);
