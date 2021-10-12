import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';
import DEFAULT_PROPS from '../constants/default-props';

interface Props {
  readonly defaultValue?: string | undefined;
  readonly onChange?:
    | ((event: ChangeEvent<HTMLInputElement>, value: string) => void)
    | undefined;
}

export interface State {
  readonly setValue: Dispatch<SetStateAction<string>>;
  readonly value: string;
  readonly handleChange: (
    event: ChangeEvent<HTMLInputElement>,
    value: string,
  ) => void;
}

export default function useRadioGroup({
  defaultValue = '',
  onChange,
}: Props = DEFAULT_PROPS): State {
  const [value, setValue] = useState(defaultValue);

  return {
    setValue,
    value,

    handleChange: useCallback(
      (e: ChangeEvent<HTMLInputElement>, newValue: string): void => {
        setValue(newValue);
        if (typeof onChange === 'function') {
          onChange(e, newValue);
        }
      },
      [onChange],
    ),
  };
}
