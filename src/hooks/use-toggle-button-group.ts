import type { Dispatch, MouseEvent, SetStateAction } from 'react';
import { useCallback, useState } from 'react';

interface Props<T> {
  readonly defaultValue?: T | undefined;
  readonly onChange: (event: MouseEvent<HTMLElement>, value: T) => void;
}

interface TypedProps<T> extends Props<T> {
  readonly defaultValue: T;
}

interface UntypedProps<T> extends Props<T> {
  readonly defaultValue?: undefined;
}

export interface State<T> {
  readonly handleChange: (event: MouseEvent<HTMLElement>, value: T) => void;
  readonly setValue: Dispatch<SetStateAction<T>>;
  readonly value: T;
}

export default function useToggleButtonGroup<T>(props: TypedProps<T>): State<T>;
export default function useToggleButtonGroup<T>(
  props?: UntypedProps<T>,
): State<T | undefined>;
export default function useToggleButtonGroup<T>(
  props?: Props<T | undefined>,
): State<T | undefined> {
  const { defaultValue, onChange } = props ?? {};

  const [value, setValue] = useState<T | undefined>(defaultValue);

  return {
    setValue,
    value,

    handleChange: useCallback(
      (e: MouseEvent<HTMLElement>, newValue: T | undefined): void => {
        setValue(newValue);

        if (typeof onChange === 'function') {
          onChange(e, newValue);
        }
      },
      [onChange],
    ),
  };
}
