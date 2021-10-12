import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useCallback, useState } from 'react';
import DEFAULT_PROPS from '../constants/default-props';

interface Props {
  readonly defaultOpen?: boolean | undefined;
  readonly onClose?: ((event: SyntheticEvent) => void) | undefined;
  readonly onOpen?: ((event: SyntheticEvent) => void) | undefined;
}

export interface State {
  readonly handleClose: (event: SyntheticEvent) => void;
  readonly handleOpen: (event: SyntheticEvent) => void;
  readonly open: boolean;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function useSpeedDial({
  defaultOpen = false,
  onClose,
  onOpen,
}: Props = DEFAULT_PROPS): State {
  const [open, setOpen] = useState(defaultOpen);

  return {
    open,
    setOpen,

    handleClose: useCallback(
      (e: SyntheticEvent): void => {
        setOpen(false);
        if (typeof onClose === 'function') {
          onClose(e);
        }
      },
      [onClose],
    ),

    handleOpen: useCallback(
      (e: SyntheticEvent): void => {
        setOpen(true);
        if (typeof onOpen === 'function') {
          onOpen(e);
        }
      },
      [onOpen],
    ),
  };
}
