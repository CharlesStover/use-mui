import TextField from '@mui/material/TextField';
import type { ReactElement, SyntheticEvent } from 'react';
import type { TextFieldState } from '.';
import { useTextField } from '.';
import describeHook from './test-utils/describe-hook';
import mapValueToTestChangeEvent from './test-utils/map-value-to-test-change-event';

const TEST_VALUE = 'test value';
const TEST_CHANGE_EVENT: SyntheticEvent = mapValueToTestChangeEvent(TEST_VALUE);

describeHook(
  useTextField,
  ({ handleChange, value }: TextFieldState): ReactElement => (
    <TextField onChange={handleChange} value={value} />
  ),
  [
    {
      args: [TEST_CHANGE_EVENT],
      callback: 'onChange',
      defaultGetter: 'defaultValue',
      defaultValue: '',
      getter: 'value',
      handler: 'handleChange',
      setter: 'setValue',
      value: TEST_VALUE,
    },
  ],
);
