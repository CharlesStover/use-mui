import type { SelectChangeEvent } from '@mui/material';
import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

export interface Props<T = unknown> {
  readonly defaultChild?: unknown | undefined;
  readonly defaultOpen?: boolean | undefined;
  readonly defaultValue?: T | string | undefined;
  readonly onClose?: ((event: SyntheticEvent) => void) | undefined;
  readonly onOpen?: ((event: SyntheticEvent) => void) | undefined;
  readonly onChange?:
    | ((event: SelectChangeEvent<T>, child?: unknown) => void)
    | undefined;
}

export interface State<T = unknown> {
  readonly child: unknown | undefined;
  readonly handleChange: (event: SelectChangeEvent<T>, child?: unknown) => void;
  readonly handleClose: (event: SyntheticEvent) => void;
  readonly handleOpen: (event: SyntheticEvent) => void;
  readonly open: boolean;
  readonly setChild: Dispatch<SetStateAction<unknown | undefined>>;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
  readonly setValue: Dispatch<SetStateAction<T | string>>;
  readonly value: T | string;
}

export default function useSelect<T = unknown>({
  defaultChild,
  defaultOpen = false,
  defaultValue = '',
  onChange,
  onClose,
  onOpen,
}: Partial<Props<T>> | undefined = DEFAULT_PROPS): State<T> {
  const [child, setChild] = useState(defaultChild);
  const [open, setOpen] = useState(defaultOpen);
  const [value, setValue] = useState(defaultValue);

  return {
    child,
    open,
    setChild,
    setOpen,
    setValue,
    value,

    handleChange: useHandler(
      onChange,
      (e: SelectChangeEvent<T>, newChild?: unknown) => {
        setChild(newChild);
        setValue(e.target.value);
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
