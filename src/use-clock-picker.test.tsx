import AdapterDateFns from '@mui/lab/AdapterDateFns';
import ClockPicker from '@mui/lab/ClockPicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import type { ReactElement } from 'react';
import { useClockPicker } from '.';
import describeHook from './test-utils/describe-hook';

const DEFAULT_VIEW = 'hours';
const TEST_DATE: Date = new Date();
const TEST_VIEW = 'seconds';

describeHook(
  useClockPicker,
  ({ date, handleChange, handleViewChange, view }): ReactElement => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ClockPicker
        date={date}
        onChange={handleChange}
        onViewChange={handleViewChange}
        view={view}
      />
    </LocalizationProvider>
  ),
  [
    {
      args: [TEST_DATE],
      callback: 'onChange',
      defaultGetter: 'defaultDate',
      defaultValue: null,
      getter: 'date',
      handler: 'handleChange',
      setter: 'setDate',
      value: TEST_DATE,
    },
    {
      args: [TEST_VIEW],
      callback: 'onViewChange',
      defaultGetter: 'defaultView',
      defaultValue: DEFAULT_VIEW,
      getter: 'view',
      handler: 'handleViewChange',
      setter: 'setView',
      value: TEST_VIEW,
    },
  ],
);
