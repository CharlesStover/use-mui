import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';
import DEFAULT_PROPS from '../constants/default-props';

interface Props {
  readonly defaultDate?: unknown | undefined;
  readonly onChange?: ((date: unknown) => void) | undefined;
}

export interface State {
  readonly date: unknown;
  readonly handleChange: (date: unknown) => void;
  readonly setDate: Dispatch<SetStateAction<unknown>>;
}

export default function useMonthPicker({
  defaultDate,
  onChange,
}: Props = DEFAULT_PROPS): State {
  const [date, setDate] = useState(defaultDate);

  return {
    date,
    setDate,

    handleChange: useCallback(
      (newDate: unknown): void => {
        setDate(newDate);
        if (typeof onChange === 'function') {
          onChange(newDate);
        }
      },
      [onChange],
    ),
  };
}
