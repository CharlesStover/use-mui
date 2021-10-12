import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

interface Props {
  readonly defaultOpen?: boolean | undefined;
  readonly defaultReason?: string | undefined;
  readonly onClose?:
    | ((event: SyntheticEvent, reason: string) => void)
    | undefined;
}

export interface State {
  readonly handleClose: (event: SyntheticEvent, reason: string) => void;
  readonly open: boolean;
  readonly reason: string | undefined;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
  readonly setReason: Dispatch<SetStateAction<string | undefined>>;
}

export default function useSnackbar({
  defaultOpen = false,
  defaultReason,
  onClose,
}: Props = DEFAULT_PROPS): State {
  const [open, setOpen] = useState(defaultOpen);
  const [reason, setReason] = useState(defaultReason);

  return {
    open,
    reason,
    setOpen,
    setReason,

    handleClose: useHandler(
      onClose,
      (_event: SyntheticEvent, newReason: string): void => {
        setOpen(false);
        setReason(newReason);
      },
    ),
  };
}
