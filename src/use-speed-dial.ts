import type { CloseReason } from '@mui/material/SpeedDial';
import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

interface Props {
  readonly defaultOpen?: boolean | undefined;
  readonly defaultCloseReason?: CloseReason | undefined;
  readonly onClose?:
    | ((
        event: SyntheticEvent<Record<string, never>>,
        reason: CloseReason,
      ) => void)
    | undefined;
  readonly onOpen?:
    | ((event: SyntheticEvent<Record<string, never>>) => void)
    | undefined;
}

export interface State {
  readonly closeReason: CloseReason | undefined;
  readonly handleOpen: (event: SyntheticEvent<Record<string, never>>) => void;
  readonly open: boolean;
  readonly setCloseReason: Dispatch<SetStateAction<CloseReason | undefined>>;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
  readonly handleClose: (
    event: SyntheticEvent<Record<string, never>>,
    reason: CloseReason,
  ) => void;
}

export default function useSpeedDial({
  defaultCloseReason,
  defaultOpen = false,
  onClose,
  onOpen,
}: Partial<Props> = DEFAULT_PROPS): State {
  const [closeReason, setCloseReason] = useState(defaultCloseReason);
  const [open, setOpen] = useState(defaultOpen);

  return {
    closeReason,
    open,
    setCloseReason,
    setOpen,

    handleClose: useHandler(
      onClose,
      (
        _event: SyntheticEvent<Record<string, never>>,
        reason: CloseReason,
      ): void => {
        setCloseReason(reason);
        setOpen(false);
      },
    ),

    handleOpen: useHandler(onOpen, (): void => {
      setOpen(true);
    }),
  };
}
