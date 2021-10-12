import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';
import DEFAULT_PROPS from '../constants/default-props';

interface Props {
  readonly defaultChecked?: boolean | undefined;
  readonly onChange?:
    | ((event: ChangeEvent<HTMLInputElement>) => void)
    | undefined;
}

export interface State {
  readonly checked: boolean;
  readonly handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  readonly setChecked: Dispatch<SetStateAction<boolean>>;
}

export default function useRadio({
  defaultChecked = false,
  onChange,
}: Props = DEFAULT_PROPS): State {
  const [checked, setChecked] = useState(defaultChecked);

  return {
    checked,
    setChecked,

    handleChange: useCallback(
      (e: ChangeEvent<HTMLInputElement>): void => {
        setChecked(e.target.checked);
        if (typeof onChange === 'function') {
          onChange(e);
        }
      },
      [onChange],
    ),
  };
}
