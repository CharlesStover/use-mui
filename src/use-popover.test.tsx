import type { ReactElement } from 'react';
import { usePopover } from '.';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

const TEST_REASON = 'test reason';

describeHook(usePopover, (): ReactElement => <>{null}</>, [
  {
    defaultGetter: 'defaultOpen',
    defaultValue: false,
    getter: 'open',
    setter: 'setOpen',
    value: true,
  },
  {
    defaultGetter: 'defaultReason',
    defaultValue: undefined,
    getter: 'reason',
    setter: 'setReason',
    value: TEST_REASON,
  },
  {
    args: [new TestChangeEvent(), TEST_REASON],
    callback: 'onClose',
    handler: 'handleClose',
    props: {
      defaultOpen: true,
    },
    states: {
      open: false,
      reason: TEST_REASON,
    },
  },
]);
