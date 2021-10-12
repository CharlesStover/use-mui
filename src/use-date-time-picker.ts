import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

interface Props {
  readonly defaultOpen?: boolean | undefined;
  readonly defaultValue?: Date | number | string | null | undefined;
  readonly onClose?: (() => void) | undefined;
  readonly onOpen?: (() => void) | undefined;
  readonly onChange?:
    | ((value: Date | number | string | null | undefined) => void)
    | undefined;
}

export interface State {
  readonly handleClose: () => void;
  readonly handleOpen: () => void;
  readonly open: boolean;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
  readonly value: Date | number | string | null | undefined;
  readonly handleChange: (
    value: Date | number | string | null | undefined,
  ) => void;
  readonly setValue: Dispatch<
    SetStateAction<Date | number | string | null | undefined>
  >;
}

export default function useDateTimePicker({
  defaultOpen = false,
  defaultValue,
  onChange,
  onClose,
  onOpen,
}: Props = DEFAULT_PROPS): State {
  const [open, setOpen] = useState(defaultOpen);
  const [value, setValue] = useState(defaultValue);

  return {
    open,
    setOpen,
    setValue,
    value,

    handleChange: useHandler(
      onChange,
      (newValue: Date | number | string | null | undefined): void => {
        setValue(newValue);
      },
    ),

    handleClose: useHandler(onClose, (): void => {
      setOpen(false);
    }),

    handleOpen: useHandler(onOpen, (): void => {
      setOpen(true);
    }),
  };
}
