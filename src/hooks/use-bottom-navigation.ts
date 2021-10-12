import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useCallback, useState } from 'react';
import DEFAULT_PROPS from '../constants/default-props';

interface Props<T> {
  readonly defaultValue?: T | undefined;
  readonly onChange?: (event: SyntheticEvent, value: T) => void;
}

export interface State<T> {
  readonly handleChange: (event: SyntheticEvent, value: T) => void;
  readonly setValue: Dispatch<SetStateAction<T | undefined>>;
  readonly value: T | undefined;
}

export default function useBottomNavigation<T>({
  defaultValue,
  onChange,
}: Props<T> = DEFAULT_PROPS): State<T> {
  const [value, setValue] = useState(defaultValue);

  return {
    setValue,
    value,

    handleChange: useCallback(
      (e: SyntheticEvent, newValue: T): void => {
        setValue(newValue);
        if (typeof onChange === 'function') {
          onChange(e, newValue);
        }
      },
      [onChange],
    ),
  };
}
