import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

interface Props {
  readonly defaultValue?: number | false | undefined;
  readonly onChange?:
    | ((event: SyntheticEvent, value: number | false) => void)
    | undefined;
}

export interface State {
  readonly handleChange: (event: SyntheticEvent, value: number | false) => void;
  readonly setValue: Dispatch<SetStateAction<number | false>>;
  readonly value: number | false;
}

export default function useTabs({
  defaultValue = false,
  onChange,
}: Partial<Props> = DEFAULT_PROPS): State {
  const [value, setValue] = useState(defaultValue);

  return {
    setValue,
    value,

    handleChange: useHandler(
      onChange,
      (_event: SyntheticEvent, newValue: number | false): void => {
        setValue(newValue);
      },
    ),
  };
}
