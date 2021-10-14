import Tooltip from '@mui/material/Tooltip';
import type { ReactElement } from 'react';
import type { TooltipState } from '.';
import { useTooltip } from '.';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

describeHook(
  useTooltip,
  ({ handleClose, handleOpen, open }: TooltipState): ReactElement => (
    <Tooltip
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      title="test title"
    >
      <>{null}</>
    </Tooltip>
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
