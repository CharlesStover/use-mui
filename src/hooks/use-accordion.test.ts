import { useAccordion } from '..';
import describeHook from '../test-utils/describe-hook';
import TestChangeEvent from '../test-utils/test-change-event';

describeHook(useAccordion, [
  {
    args: [new TestChangeEvent(), true],
    callback: 'onChange',
    defaultGetter: 'defaultExpanded',
    defaultValue: false,
    getter: 'expanded',
    handler: 'handleChange',
    setter: 'setExpanded',
    value: true,
  },
]);
