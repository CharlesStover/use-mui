import NativeSelect from '@mui/material/NativeSelect';
import type { ReactElement, SyntheticEvent } from 'react';
import type { NativeSelectState } from '.';
import { useNativeSelect } from '.';
import describeHook from './test-utils/describe-hook';
import mapValueToTestChangeEvent from './test-utils/map-value-to-test-change-event';

const TEST_VALUE = 'test value';
const TEST_CHANGE_EVENT: SyntheticEvent = mapValueToTestChangeEvent(TEST_VALUE);

describeHook(
  useNativeSelect,
  ({ handleChange, value }: NativeSelectState): ReactElement => (
    <NativeSelect onChange={handleChange} value={value} />
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
