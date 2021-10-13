import { useRating } from '.';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

describeHook(useRating, [
  {
    args: [new TestChangeEvent(), 'test value'],
    callback: 'onChange',
    defaultGetter: 'defaultValue',
    defaultValue: null,
    getter: 'value',
    handler: 'handleChange',
    setter: 'setValue',
    value: 'test value',
  },
]);