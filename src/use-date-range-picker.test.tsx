import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangePicker from '@mui/lab/DateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import type { ReactElement } from 'react';
import type { DateRangePickerState } from '.';
import { useDateRangePicker } from '.';
import DEFAULT_DATE_RANGE_PICKER_VALUE from './constants/default-date-range-picker-value';
import describeHook from './test-utils/describe-hook';

const NOW_DATE: Date = new Date();
const NOW_TIME: number = Date.now();
const NOW_RANGE: [Date, number] = [NOW_DATE, NOW_TIME];

describeHook(
  useDateRangePicker,
  ({
    handleChange,
    handleClose,
    handleOpen,
    open,
    value,
  }: DateRangePickerState): ReactElement => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        onChange={handleChange}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        renderInput={(): ReactElement => <>{null}</>}
        value={value}
      />
    </LocalizationProvider>
  ),
  [
    {
      defaultGetter: 'defaultOpen',
      defaultValue: false,
      getter: 'open',
      setter: 'setOpen',
      value: true,
    },
    {
      args: [NOW_RANGE],
      callback: 'onChange',
      defaultGetter: 'defaultValue',
      defaultValue: DEFAULT_DATE_RANGE_PICKER_VALUE,
      getter: 'value',
      handler: 'handleChange',
      setter: 'setValue',
      value: NOW_RANGE,
    },
    {
      args: [],
      callback: 'onClose',
      handler: 'handleClose',
      props: {
        defaultOpen: true,
      },
      states: {
        open: false,
      },
    },
    {
      args: [],
      callback: 'onOpen',
      handler: 'handleOpen',
      states: {
        open: true,
      },
    },
  ],
);
