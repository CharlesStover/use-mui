import type { SelectChangeEvent } from '@mui/material';
import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useCallback, useState } from 'react';

interface Props<T> {
  readonly defaultOpen?: boolean | undefined;
  readonly defaultValue?: T | string | undefined;
  readonly onClose?: ((event: SyntheticEvent) => void) | undefined;
  readonly onOpen?: ((event: SyntheticEvent) => void) | undefined;
  readonly onChange?:
    | ((event: SelectChangeEvent<T>, child?: unknown) => void)
    | undefined;
}

export interface State<T> {
  readonly handleChange: (event: SelectChangeEvent<T>, child?: unknown) => void;
  readonly handleClose: (event: SyntheticEvent) => void;
  readonly handleOpen: (event: SyntheticEvent) => void;
  readonly open: boolean;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
  readonly setValue: Dispatch<SetStateAction<T | string>>;
  readonly value: T | string;
}

export default function useSelect<T>(props?: Props<T>): State<T> {
  const {
    defaultOpen = false,
    defaultValue = '',
    onChange,
    onClose,
    onOpen,
  } = props ?? {};

  const [open, setOpen] = useState(defaultOpen);
  const [value, setValue] = useState(defaultValue);

  return {
    open,
    setOpen,
    setValue,
    value,

    handleChange: useCallback(
      (e: SelectChangeEvent<T>, child?: unknown) => {
        setValue(e.target.value);
        if (typeof onChange === 'function') {
          onChange(e, child);
        }
      },
      [onChange],
    ),

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
