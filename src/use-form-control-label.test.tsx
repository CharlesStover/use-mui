import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import type { ReactElement } from 'react';
import type { FormControlLabelState } from '.';
import { useFormControlLabel } from '.';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

describeHook(
  useFormControlLabel,
  ({ checked, handleChange }: FormControlLabelState): ReactElement => (
    <FormControlLabel
      checked={checked}
      control={<Checkbox />}
      label={<>{null}</>}
      onChange={handleChange}
    />
  ),
  [
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
  ],
);
