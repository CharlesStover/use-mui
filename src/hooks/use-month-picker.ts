import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';

interface Props {
  readonly defaultDate?: unknown | undefined;
  readonly onChange?: ((date: unknown) => void) | undefined;
}

export interface State {
  readonly date: unknown;
  readonly handleChange: (date: unknown) => void;
  readonly setDate: Dispatch<SetStateAction<unknown>>;
}

const DEFAULT_PROPS: Props = {};

export default function useMonthPicker(props: Props = DEFAULT_PROPS): State {
  const { defaultDate, onChange } = props;

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
