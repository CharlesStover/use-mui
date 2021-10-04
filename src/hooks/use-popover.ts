import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useCallback, useState } from 'react';

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

const DEFAULT_PROPS: Props = {};

export default function usePopover(props: Props = DEFAULT_PROPS): State {
  const { defaultOpen = false, defaultReason, onClose } = props;

  const [open, setOpen] = useState(defaultOpen);
  const [reason, setReason] = useState(defaultReason);

  return {
    open,
    reason,
    setOpen,
    setReason,

    handleClose: useCallback(
      (e: SyntheticEvent, newReason: string): void => {
        setOpen(false);
        setReason(newReason);
        if (typeof onClose === 'function') {
          onClose(e, newReason);
        }
      },
      [onClose],
    ),
  };
}
