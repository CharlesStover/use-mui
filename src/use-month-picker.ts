import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

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

    handleChange: useHandler(onChange, (newDate: unknown): void => {
      setDate(newDate);
    }),
  };
}
