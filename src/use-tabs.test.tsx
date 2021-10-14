import Tabs from '@mui/material/Tabs';
import type { ReactElement } from 'react';
import type { TabsState } from '.';
import { useTabs } from '.';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

const TEST_VALUE = 99;

describeHook(
  useTabs,
  ({ handleChange, value }: TabsState): ReactElement => (
    <Tabs onChange={handleChange} value={value} />
  ),
  [
    {
      args: [new TestChangeEvent(), TEST_VALUE],
      callback: 'onChange',
      defaultGetter: 'defaultValue',
      defaultValue: false,
      getter: 'value',
      handler: 'handleChange',
      setter: 'setValue',
      value: TEST_VALUE,
    },
  ],
);
