import Checkbox from '@mui/material/Checkbox';
import type { ReactElement } from 'react';
import type { CheckboxState } from '.';
import { useCheckbox } from '.';
import describeHook from './test-utils/describe-hook';
import mapCheckedToTestChangeEvent from './test-utils/map-checked-to-test-change-event';

describeHook(
  useCheckbox,
  ({ checked, handleChange }: CheckboxState): ReactElement => (
    <Checkbox checked={checked} onChange={handleChange} />
  ),
  [
    {
      args: [mapCheckedToTestChangeEvent(true)],
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
