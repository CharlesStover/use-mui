import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

interface Props<T = unknown> {
  readonly defaultValue?: T | undefined;
  readonly onChange?: ((event: SyntheticEvent, value: T) => void) | undefined;
}

export interface State<T = unknown> {
  readonly handleChange: (event: SyntheticEvent, value: T) => void;
  readonly setValue: Dispatch<SetStateAction<T | undefined>>;
  readonly value: T | undefined;
}

export default function useBottomNavigation<T>({
  defaultValue,
  onChange,
}: Partial<Props<T>> = DEFAULT_PROPS): State<T> {
  const [value, setValue] = useState(defaultValue);

  return {
    setValue,
    value,

    handleChange: useHandler(
      onChange,
      (_event: SyntheticEvent, newValue: T): void => {
        setValue(newValue);
      },
    ),
  };
}
