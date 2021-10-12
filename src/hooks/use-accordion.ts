import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useCallback, useState } from 'react';
import DEFAULT_PROPS from '../constants/default-props';

interface Props {
  readonly defaultExpanded?: boolean | undefined;
  readonly onChange?:
    | ((event: SyntheticEvent, expanded: boolean) => void)
    | undefined;
}

export interface State {
  readonly expanded: boolean;
  readonly handleChange: (event: SyntheticEvent, expanded: boolean) => void;
  readonly setExpanded: Dispatch<SetStateAction<boolean>>;
}

export default function useAccordion({
  defaultExpanded = false,
  onChange,
}: Props = DEFAULT_PROPS): State {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return {
    expanded,
    setExpanded,

    handleChange: useCallback(
      (e: SyntheticEvent, newExpanded: boolean): void => {
        setExpanded(newExpanded);
        if (typeof onChange === 'function') {
          onChange(e, newExpanded);
        }
      },
      [onChange],
    ),
  };
}
