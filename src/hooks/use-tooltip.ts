import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useCallback, useState } from 'react';

interface Props {
  readonly defaultOpen?: boolean | undefined;
  readonly onClose?: ((event: SyntheticEvent) => void) | undefined;
  readonly onOpen?: ((event: SyntheticEvent) => void) | undefined;
}

interface State {
  readonly handleClose: (event: SyntheticEvent) => void;
  readonly handleOpen: (event: SyntheticEvent) => void;
  readonly open: boolean;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
}

const DEFAULT_PROPS: Props = {};

export default function useTooltip(props: Props = DEFAULT_PROPS): State {
  const { defaultOpen = false, onClose, onOpen } = props;

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
