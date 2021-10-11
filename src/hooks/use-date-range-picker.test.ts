import { useDateRangePicker } from '..';
import DEFAULT_DATE_RANGE_PICKER_VALUE from '../constants/default-date-range-picker-value';
import describeHandler from '../test-utils/describe-handler';
import describeHook from '../test-utils/describe-hook';

const NOW_DATE: Date = new Date();
const NOW_TIME: number = Date.now();
const NOW_RANGE: [Date, number] = [NOW_DATE, NOW_TIME];

describeHook(
  useDateRangePicker,
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
      args: [NOW_RANGE],
      callback: 'onChange',
      defaultGetter: 'defaultValue',
      defaultValue: DEFAULT_DATE_RANGE_PICKER_VALUE,
      getter: 'value',
      handler: 'handleChange',
      setter: 'setValue',
      value: NOW_RANGE,
    },
  ],
  (): void => {
    describeHandler(useDateRangePicker, {
      args: [],
      callback: 'onClose',
      defaultGetter: 'defaultOpen',
      defaultValue: true,
      getter: 'open',
      handler: 'handleClose',
      value: false,
    });
  },
);
