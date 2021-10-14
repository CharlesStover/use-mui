import type { ReactElement } from 'react';
import { useSpeedDial } from '.';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

describeHook(useSpeedDial, (): ReactElement => <>{null}</>, [
  {
    defaultGetter: 'defaultOpen',
    defaultValue: false,
    getter: 'open',
    setter: 'setOpen',
    value: true,
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
