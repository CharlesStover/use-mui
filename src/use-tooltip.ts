import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

interface Props {
  readonly defaultOpen?: boolean | undefined;
  readonly onClose?: ((event: Event | SyntheticEvent) => void) | undefined;
  readonly onOpen?: ((event: Event | SyntheticEvent) => void) | undefined;
}

export interface State {
  readonly handleClose: (event: Event | SyntheticEvent) => void;
  readonly handleOpen: (event: Event | SyntheticEvent) => void;
  readonly open: boolean;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function useTooltip({
  defaultOpen = false,
  onClose,
  onOpen,
}: Partial<Props> = DEFAULT_PROPS): State {
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
