import Snackbar from '@mui/material/Snackbar';
import type { ReactElement } from 'react';
import type { SnackbarState } from '.';
import { useSnackbar } from '.';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

const TEST_REASON = 'test reason';

describeHook(
  useSnackbar,
  ({ handleClose, open }: SnackbarState): ReactElement => (
    <Snackbar onClose={handleClose} open={open} />
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
  ],
);
