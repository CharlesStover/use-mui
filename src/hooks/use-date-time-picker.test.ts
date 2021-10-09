import { useDateTimePicker } from '..';
import describeGetter from '../test-utils/describe-getter';
import describeHandler from '../test-utils/describe-handler';
import describeSetter from '../test-utils/describe-setter';

const NOW: Date = new Date();

describe('useDateTimePicker', (): void => {
  describeHandler(useDateTimePicker, 'handleOpen', [], 'open', true, 'onOpen');
  describeGetter(useDateTimePicker, 'open', false, 'defaultOpen', true);
  describeSetter(useDateTimePicker, 'setOpen', 'open', true);
  describeSetter(useDateTimePicker, 'setValue', 'value', NOW);
  describeGetter(useDateTimePicker, 'value', undefined, 'defaultValue', NOW);

  describeHandler(
    useDateTimePicker,
    'handleChange',
    [NOW],
    'value',
    NOW,
    'onChange',
  );

  describeHandler(
    useDateTimePicker,
    'handleClose',
    [],
    'open',
    false,
    'onClose',
    'defaultOpen',
    true,
  );
});
