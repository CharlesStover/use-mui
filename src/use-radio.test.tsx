import Radio from '@mui/material/Radio';
import type { ReactElement } from 'react';
import type { RadioState } from '.';
import { useRadio } from '.';
import describeHook from './test-utils/describe-hook';
import mapCheckedToTestChangeEvent from './test-utils/map-checked-to-test-change-event';

describeHook(
  useRadio,
  ({ checked, handleChange }: RadioState): ReactElement => (
    <Radio checked={checked} onChange={handleChange} />
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
