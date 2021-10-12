import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

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

export default function useTooltip({
  defaultOpen = false,
  onClose,
  onOpen,
}: Props = DEFAULT_PROPS): State {
  const [open, setOpen] = useState(defaultOpen);

  return {
    open,
    setOpen,

    handleClose: useHandler(onClose, (): void => {
      setOpen(false);
    }),

    handleOpen: useHandler(onOpen, (): void => {
      setOpen(true);
    }),
  };
}
