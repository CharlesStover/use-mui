import Dialog from '@mui/material/Dialog';
import type { ReactElement } from 'react';
import type { DialogState } from '.';
import { useDialog } from '.';
import describeHook from './test-utils/describe-hook';

describeHook(
  useDialog,
  ({ handleClose, open }: DialogState): ReactElement => (
    <Dialog onClose={handleClose} open={open} />
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
  ],
);
