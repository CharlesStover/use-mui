import { useDateRangePicker } from '..';
import DEFAULT_DATE_RANGE_PICKER_VALUE from '../constants/default-date-range-picker-value';
import describeGetter from '../test-utils/describe-getter';
import describeHandler from '../test-utils/describe-handler';
import describeSetter from '../test-utils/describe-setter';

const NOW_DATE: Date = new Date();
const NOW_TIME: number = Date.now();

const NOW_RANGE: [Date, number] = [NOW_DATE, NOW_TIME];

describe('useDateRangePicker', (): void => {
  describeHandler(useDateRangePicker, 'handleOpen', [], 'open', true, 'onOpen');
  describeGetter(useDateRangePicker, 'open', false, 'defaultOpen', true);
  describeSetter(useDateRangePicker, 'setOpen', 'open', true);
  describeSetter(useDateRangePicker, 'setValue', 'value', NOW_RANGE);

  describeHandler(
    useDateRangePicker,
    'handleChange',
    [NOW_RANGE],
    'value',
    NOW_RANGE,
    'onChange',
  );

  describeHandler(
    useDateRangePicker,
    'handleClose',
    [],
    'open',
    false,
    'onClose',
    'defaultOpen',
    true,
  );

  describeGetter(
    useDateRangePicker,
    'value',
    DEFAULT_DATE_RANGE_PICKER_VALUE,
    'defaultValue',
    NOW_RANGE,
  );
});
