import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

interface Props {
  readonly defaultValue?: number | null | undefined;
  readonly onChange?:
    | ((event: SyntheticEvent, value: number | null) => void)
    | undefined;
}

export interface State {
  readonly handleChange: (event: SyntheticEvent, value: number | null) => void;
  readonly setValue: Dispatch<SetStateAction<number | null>>;
  readonly value: number | null;
}

export default function useRating({
  defaultValue = null,
  onChange,
}: Partial<Props> = DEFAULT_PROPS): State {
  const [value, setValue] = useState(defaultValue);

  return {
    setValue,
    value,

    handleChange: useHandler(
      onChange,
      (_event: SyntheticEvent, newValue: number | null): void => {
        setValue(newValue);
      },
    ),
  };
}
