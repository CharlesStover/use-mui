import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

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

    handleChange: useHandler(
      onChange,
      (_event: SyntheticEvent, newExpanded: boolean): void => {
        setExpanded(newExpanded);
      },
    ),
  };
}
