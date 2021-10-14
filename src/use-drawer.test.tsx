import type { ReactElement } from 'react';
import { useDrawer } from '.';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

describeHook(useDrawer, (): ReactElement => <>{null}</>, [
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
]);
