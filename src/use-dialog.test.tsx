import type { ReactElement } from 'react';
import { useDialog } from '.';
import describeHook from './test-utils/describe-hook';

describeHook(useDialog, (): ReactElement => <>{null}</>, [
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
]);
