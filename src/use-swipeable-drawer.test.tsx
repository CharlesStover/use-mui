import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import type { ReactElement } from 'react';
import type { SwipeableDrawerState } from '.';
import { useSwipeableDrawer } from '.';
import describeHook from './test-utils/describe-hook';

describeHook(
  useSwipeableDrawer,
  ({ handleClose, handleOpen, open }: SwipeableDrawerState): ReactElement => (
    <SwipeableDrawer onClose={handleClose} onOpen={handleOpen} open={open} />
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
  ],
);
