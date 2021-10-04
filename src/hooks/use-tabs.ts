import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useCallback, useState } from 'react';

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

const DEFAULT_PROPS: Props = {};

export default function useTabs(props: Props = DEFAULT_PROPS): State {
  const { defaultValue = false, onChange } = props;

  const [value, setValue] = useState(defaultValue);

  return {
    setValue,
    value,

    handleChange: useCallback(
      (e: SyntheticEvent, newValue: number | false): void => {
        setValue(newValue);
        if (typeof onChange === 'function') {
          onChange(e, newValue);
        }
      },
      [onChange],
    ),
  };
}
