import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useCallback, useState } from 'react';

interface Props {
  readonly defaultChecked?: boolean | undefined;
  readonly onChange?:
    | ((event: SyntheticEvent, checked: boolean) => void)
    | undefined;
}

export interface State {
  readonly checked: boolean;
  readonly handleChange: (event: SyntheticEvent, checked: boolean) => void;
  readonly setChecked: Dispatch<SetStateAction<boolean>>;
}

export default function useFormControlLabel({
  defaultChecked = false,
  onChange,
}: Props): State {
  const [checked, setChecked] = useState(defaultChecked);

  return {
    checked,
    setChecked,

    handleChange: useCallback(
      (e: SyntheticEvent, newChecked: boolean): void => {
        setChecked(newChecked);
        if (typeof onChange === 'function') {
          onChange(e, newChecked);
        }
      },
      [onChange],
    ),
  };
}
