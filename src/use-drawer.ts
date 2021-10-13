import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

interface Props {
  readonly defaultOpen?: boolean | undefined;
  readonly onClose?: ((event: unknown) => void) | undefined;
}

export interface State {
  readonly handleClose: (event: unknown) => void;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
  readonly open: boolean;
}

export default function useDrawer({
  defaultOpen = false,
  onClose,
}: Partial<Props> = DEFAULT_PROPS): State {
  const [open, setOpen] = useState(defaultOpen);

  return {
    open,
    setOpen,

    handleClose: useHandler(onClose, (): void => {
      setOpen(false);
    }),
  };
}
