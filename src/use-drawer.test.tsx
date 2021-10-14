import Drawer from '@mui/material/Drawer';
import type { ReactElement } from 'react';
import type { DrawerState } from '.';
import { useDrawer } from '.';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

describeHook(
  useDrawer,
  ({ handleClose, open }: DrawerState): ReactElement => (
    <Drawer onClose={handleClose} open={open} />
  ),
  [
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
  ],
);
