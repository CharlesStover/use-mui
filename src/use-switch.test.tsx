import Switch from '@mui/material/Switch';
import type { ReactElement } from 'react';
import type { SwitchState } from '.';
import { useSwitch } from '.';
import describeHook from './test-utils/describe-hook';
import mapCheckedToTestChangeEvent from './test-utils/map-checked-to-test-change-event';

describeHook(
  useSwitch,
  ({ checked, handleChange }: SwitchState): ReactElement => (
    <Switch checked={checked} onChange={handleChange} />
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
