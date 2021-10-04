import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useCallback, useState } from 'react';

interface Props {
  readonly defaultExpanded?: readonly string[] | undefined;
  readonly defaultSelected?: string | readonly string[] | undefined;
  readonly onNodeSelect?:
    | ((event: SyntheticEvent, nodeIds: string | readonly string[]) => void)
    | undefined;
  readonly onNodeToggle?:
    | ((event: SyntheticEvent, nodeIds: readonly string[]) => void)
    | undefined;
}

export interface State {
  readonly expanded: readonly string[];
  readonly selected: string | readonly string[];
  readonly setExpanded: Dispatch<SetStateAction<readonly string[]>>;
  readonly setSelected: Dispatch<SetStateAction<string | readonly string[]>>;
  readonly handleNodeSelect: (
    event: SyntheticEvent,
    nodeIds: string | readonly string[],
  ) => void;
  readonly handleNodeToggle: (
    event: SyntheticEvent,
    nodeIds: readonly string[],
  ) => void;
}

const DEFAULT_EXPANDED: readonly string[] = Object.freeze([]);
const DEFAULT_PROPS: Props = {};
const DEFAULT_SELECTED: readonly string[] = Object.freeze([]);

export default function useTreeView(props: Props = DEFAULT_PROPS): State {
  const {
    defaultExpanded = DEFAULT_EXPANDED,
    defaultSelected = DEFAULT_SELECTED,
    onNodeSelect,
    onNodeToggle,
  } = props;

  const [expanded, setExpanded] = useState(defaultExpanded);
  const [selected, setSelected] = useState(defaultSelected);

  return {
    expanded,
    selected,
    setExpanded,
    setSelected,

    handleNodeSelect: useCallback(
      (e: SyntheticEvent, nodeIds: string | readonly string[]): void => {
        setSelected(nodeIds);
        if (typeof onNodeSelect === 'function') {
          onNodeSelect(e, nodeIds);
        }
      },
      [onNodeSelect],
    ),

    handleNodeToggle: useCallback(
      (e: SyntheticEvent, nodeIds: readonly string[]): void => {
        setExpanded(nodeIds);
        if (typeof onNodeToggle === 'function') {
          onNodeToggle(e, nodeIds);
        }
      },
      [onNodeToggle],
    ),
  };
}
