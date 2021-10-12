import { useFormControlLabel } from '..';
import describeHook from '../test-utils/describe-hook';
import mapCheckedToTestChangeEvent from '../test-utils/map-checked-to-test-change-event';

describeHook(useFormControlLabel, [
  {
    args: [mapCheckedToTestChangeEvent(true)],
    callback: 'onChange',
    defaultGetter: 'defaultChecked',
    defaultValue: false,
    getter: 'checked',
    handler: 'handleChange',
    setter: 'setChecked',
    value: true,
  },
]);
