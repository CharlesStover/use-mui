import type { Dispatch, MouseEvent, SetStateAction } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

interface Props<T = unknown> {
  readonly defaultValue?: T | undefined;
  readonly onChange?:
    | ((event: MouseEvent<HTMLElement>, value: T | undefined) => void)
    | undefined;
}

export interface State<T = unknown> {
  readonly setValue: Dispatch<SetStateAction<T | undefined>>;
  readonly value: T | undefined;
  readonly handleChange: (
    event: MouseEvent<HTMLElement>,
    value: T | undefined,
  ) => void;
}

export default function useToggleButtonGroup<T = unknown>({
  defaultValue,
  onChange,
}: Partial<Props<T>> = DEFAULT_PROPS): State<T> {
  const [value, setValue] = useState<T | undefined>(defaultValue);

  return {
    setValue,
    value,

    handleChange: useHandler(
      onChange,
      (_event: MouseEvent<HTMLElement>, newValue: T | undefined): void => {
        setValue(newValue);
      },
    ),
  };
}
