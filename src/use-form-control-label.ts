import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

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
}: Partial<Props> = DEFAULT_PROPS): State {
  const [checked, setChecked] = useState(defaultChecked);

  return {
    checked,
    setChecked,

    handleChange: useHandler(
      onChange,
      (_event: SyntheticEvent, newChecked: boolean): void => {
        setChecked(newChecked);
      },
    ),
  };
}
