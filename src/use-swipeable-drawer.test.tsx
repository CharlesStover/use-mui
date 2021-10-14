import type { ReactElement } from 'react';
import { useSwipeableDrawer } from '.';
import describeHook from './test-utils/describe-hook';

describeHook(useSwipeableDrawer, (): ReactElement => <>{null}</>, [
  {
    defaultGetter: 'defaultOpen',
    defaultValue: false,
    getter: 'open',
    setter: 'setOpen',
    value: true,
  },
  {
    args: [],
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
    args: [],
    callback: 'onOpen',
    handler: 'handleOpen',
    states: {
      open: true,
    },
  },
]);
