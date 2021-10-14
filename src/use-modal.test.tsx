import Modal from '@mui/material/Modal';
import type { ReactElement } from 'react';
import type { ModalState } from '.';
import { useModal } from '.';
import describeHook from './test-utils/describe-hook';

describeHook(
  useModal,
  ({ handleClose, open }: ModalState): ReactElement => (
    <Modal onClose={handleClose} open={open}>
      <>Hello world</>
    </Modal>
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
