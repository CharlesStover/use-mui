import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

interface Props {
  readonly defaultOpen?: boolean | undefined;
  readonly onClose?: (() => void) | undefined;
}

export interface State {
  readonly handleClose: () => void;
  readonly open: boolean;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function useModal({
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
