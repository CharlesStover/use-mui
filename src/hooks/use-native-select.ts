import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';

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

const DEFAULT_PROPS: Props = {};
const DEFAULT_VALUE = '';

export default function useNativeSelect(props: Props = DEFAULT_PROPS): State {
  const { defaultValue = DEFAULT_VALUE, onChange } = props;

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
