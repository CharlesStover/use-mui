import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useCallback, useState } from 'react';

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

const DEFAULT_PROPS: Props = {};
const DEFAULT_VALUE = null;

export default function useRating(props: Props = DEFAULT_PROPS): State {
  const { defaultValue = DEFAULT_VALUE, onChange } = props;

  const [value, setValue] = useState(defaultValue);

  return {
    setValue,
    value,

    handleChange: useCallback(
      (e: SyntheticEvent, newValue: number | null): void => {
        setValue(newValue);
        if (typeof onChange === 'function') {
          onChange(e, newValue);
        }
      },
      [onChange],
    ),
  };
}
