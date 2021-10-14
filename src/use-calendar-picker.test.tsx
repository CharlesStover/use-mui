import AdapterDateFns from '@mui/lab/AdapterDateFns';
import CalendarPicker from '@mui/lab/CalendarPicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import type { ReactElement } from 'react';
import type { CalendarPickerState } from '.';
import { useCalendarPicker } from '.';
import describeHook from './test-utils/describe-hook';

const TEST_DATE: Date = new Date();
const TEST_VIEW = 'year';

describeHook(
  useCalendarPicker,
  ({
    date,
    handleChange,
    handleViewChange,
    view,
  }: CalendarPickerState): ReactElement => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CalendarPicker
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
      defaultValue: undefined,
      getter: 'date',
      handler: 'handleChange',
      setter: 'setDate',
      value: TEST_DATE,
    },
    {
      args: [TEST_VIEW],
      callback: 'onViewChange',
      defaultGetter: 'defaultView',
      defaultValue: 'day',
      getter: 'view',
      handler: 'handleViewChange',
      setter: 'setView',
      value: TEST_VIEW,
    },
  ],
);
