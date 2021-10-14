import Menu from '@mui/material/Menu';
import type { ReactElement } from 'react';
import type { MenuState } from '.';
import { useMenu } from '.';
import describeHook from './test-utils/describe-hook';

describeHook(
  useMenu,
  ({ handleClose, open }: MenuState): ReactElement => (
    <Menu onClose={handleClose} open={open} />
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
