import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';
import DEFAULT_PROPS from '../constants/default-props';

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
}: Props = DEFAULT_PROPS): State {
  const [value, setValue] = useState(defaultValue);

  return {
    setValue,
    value,

    handleChange: useCallback(
      (e: ChangeEvent<HTMLSelectElement>): void => {
        setValue(e.target.value);
        if (typeof onChange === 'function') {
          onChange(e);
        }
      },
      [onChange],
    ),
  };
}
