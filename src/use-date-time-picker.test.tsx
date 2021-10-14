import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import type { ReactElement } from 'react';
import type { DateTimePickerState } from '.';
import { useDateTimePicker } from '.';
import describeHook from './test-utils/describe-hook';

const NOW: Date = new Date();

describeHook(
  useDateTimePicker,
  ({
    handleChange,
    handleClose,
    handleOpen,
    open,
    value,
  }: DateTimePickerState): ReactElement => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
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
      args: [],
      callback: 'onOpen',
      defaultGetter: 'defaultOpen',
      defaultValue: false,
      getter: 'open',
      handler: 'handleOpen',
      setter: 'setOpen',
      value: true,
    },
    {
      args: [NOW],
      callback: 'onChange',
      defaultGetter: 'defaultValue',
      defaultValue: undefined,
      getter: 'value',
      handler: 'handleChange',
      setter: 'setValue',
      value: NOW,
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
  ],
);
