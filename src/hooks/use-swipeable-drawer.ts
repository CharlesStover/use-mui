import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';

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

const DEFAULT_PROPS: Props = {};

export default function useSwipeableDrawer(
  props: Props = DEFAULT_PROPS,
): State {
  const { defaultOpen = false, onClose, onOpen } = props;

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
