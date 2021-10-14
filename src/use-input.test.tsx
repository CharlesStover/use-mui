import Input from '@mui/material/Input';
import type { ReactElement } from 'react';
import type { InputState } from '.';
import { useInput } from '.';
import describeHook from './test-utils/describe-hook';
import mapValueToTestChangeEvent from './test-utils/map-value-to-test-change-event';

const TEST_VALUE = 'test value';

describeHook(
  useInput,
  ({ handleChange, value }: InputState): ReactElement => (
    <Input onChange={handleChange} value={value} />
  ),
  [
    {
      args: [mapValueToTestChangeEvent(TEST_VALUE)],
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
