import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';
import DEFAULT_PROPS from '../constants/default-props';

interface Props {
  readonly defaultOpen?: boolean | undefined;
  readonly onClose?: (() => void) | undefined;
  readonly onOpen?: (() => void) | undefined;
}

export interface State {
  readonly handleClose: () => void;
  readonly handleOpen: () => void;
  readonly open: boolean;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function useSwipeableDrawer({
  defaultOpen = false,
  onClose,
  onOpen,
}: Props = DEFAULT_PROPS): State {
  const [open, setOpen] = useState(defaultOpen);

  return {
    open,
    setOpen,

    handleClose: useCallback((): void => {
      setOpen(false);
      if (typeof onClose === 'function') {
        onClose();
      }
    }, [onClose]),

    handleOpen: useCallback((): void => {
      setOpen(true);
      if (typeof onOpen === 'function') {
        onOpen();
      }
    }, [onOpen]),
  };
}
