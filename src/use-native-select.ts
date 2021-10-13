import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

interface Props {
  readonly defaultValue?: string | undefined;
  readonly onChange?:
    | ((event: ChangeEvent<HTMLSelectElement>) => void)
    | undefined;
}

export interface State {
  readonly handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  readonly setValue: Dispatch<SetStateAction<string>>;
  readonly value: string;
}

const DEFAULT_VALUE = '';

export default function useNativeSelect({
  defaultValue = DEFAULT_VALUE,
  onChange,
}: Partial<Props> = DEFAULT_PROPS): State {
  const [value, setValue] = useState(defaultValue);

  return {
    setValue,
    value,

    handleChange: useHandler(
      onChange,
      (e: ChangeEvent<HTMLSelectElement>): void => {
        setValue(e.target.value);
      },
    ),
  };
}
