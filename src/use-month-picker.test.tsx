import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MonthPicker from '@mui/lab/MonthPicker';
import type { ReactElement } from 'react';
import type { MonthPickerState } from '.';
import { useMonthPicker } from '.';
import describeHook from './test-utils/describe-hook';

const TEST_DATE: Date = new Date();

describeHook(
  useMonthPicker,
  ({ date, handleChange }: MonthPickerState): ReactElement => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MonthPicker
        date={date}
        maxDate={1}
        minDate={0}
        onChange={handleChange}
      />
    </LocalizationProvider>
  ),
  [
    {
      args: [TEST_DATE],
      callback: 'onChange',
      defaultGetter: 'defaultDate',
      defaultValue: undefined,
      getter: 'date',
      handler: 'handleChange',
      setter: 'setDate',
      value: TEST_DATE,
    },
  ],
);
