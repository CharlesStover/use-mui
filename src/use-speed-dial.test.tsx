import type { CloseReason } from '@mui/material/SpeedDial';
import SpeedDial from '@mui/material/SpeedDial';
import type { ReactElement } from 'react';
import type { SpeedDialState } from '.';
import { useSpeedDial } from '.';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

const TEST_CLOSE_REASON: CloseReason = 'escapeKeyDown';

describeHook(
  useSpeedDial,
  ({ handleClose, handleOpen, open }: SpeedDialState): ReactElement => (
    <SpeedDial
      ariaLabel="test aria label"
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    />
  ),
  [
    {
      defaultGetter: 'defaultCloseReason',
      defaultValue: undefined,
      getter: 'closeReason',
      setter: 'setCloseReason',
      value: TEST_CLOSE_REASON,
    },
    {
      defaultGetter: 'defaultOpen',
      defaultValue: false,
      getter: 'open',
      setter: 'setOpen',
      value: true,
    },
    {
      args: [new TestChangeEvent(), TEST_CLOSE_REASON],
      callback: 'onClose',
      handler: 'handleClose',
      props: {
        defaultOpen: true,
      },
      states: {
        closeReason: TEST_CLOSE_REASON,
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
  ],
);
