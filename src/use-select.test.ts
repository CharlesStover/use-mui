import type { SyntheticEvent } from 'react';
import type { SelectState } from '.';
import { useSelect } from '.';
import describeHook from './test-utils/describe-hook';
import mapValueToTestChangeEvent from './test-utils/map-value-to-test-change-event';
import TestChangeEvent from './test-utils/test-change-event';
import type { Props } from './use-select';

const TEST_VALUE = 'test value';
const TEST_CHANGE_EVENT: SyntheticEvent = mapValueToTestChangeEvent(TEST_VALUE);

describeHook<Props, SelectState>(useSelect, [
  {
    defaultGetter: 'defaultOpen',
    defaultValue: false,
    getter: 'open',
    setter: 'setOpen',
    value: true,
  },
  {
    args: [TEST_CHANGE_EVENT, undefined],
    callback: 'onChange',
    defaultGetter: 'defaultValue',
    defaultValue: '',
    getter: 'value',
    handler: 'handleChange',
    setter: 'setValue',
    value: TEST_VALUE,
  },
  {
    args: [new TestChangeEvent()],
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
    args: [new TestChangeEvent()],
    callback: 'onOpen',
    handler: 'handleOpen',
    states: {
      open: true,
    },
  },
]);
