import { useSlider } from '..';
import describeHook from '../test-utils/describe-hook';

const TEST_ACTIVE_THUMB = 99;

describeHook(useSlider, [
  {
    defaultGetter: 'defaultActiveThumb',
    defaultValue: undefined,
    getter: 'activeThumb',
    setter: 'setActiveThumb',
    value: TEST_ACTIVE_THUMB,
  },
]);
