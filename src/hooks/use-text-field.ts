import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';
import DEFAULT_PROPS from '../constants/default-props';

interface Props {
  readonly defaultValue?: string | undefined;
  readonly onChange?:
    | ((event: ChangeEvent<HTMLTextAreaElement>) => void)
    | undefined;
}

export interface State {
  readonly handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  readonly setValue: Dispatch<SetStateAction<string>>;
  readonly value: string;
}

export default function useTextField({
  defaultValue = '',
  onChange,
}: Props = DEFAULT_PROPS): State {
  const [value, setValue] = useState(defaultValue);

  return {
    setValue,
    value,

    handleChange: useCallback(
      (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setValue(e.target.value);
        if (typeof onChange === 'function') {
          onChange(e);
        }
      },
      [onChange],
    ),
  };
}
