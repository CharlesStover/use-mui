import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

interface Props {
  readonly defaultView?: 'day' | 'month' | 'year' | undefined;
  readonly onViewChange?:
    | ((view: 'day' | 'month' | 'year') => void)
    | undefined;
}

export interface State {
  readonly handleViewChange: (view: 'day' | 'month' | 'year') => void;
  readonly setView: Dispatch<SetStateAction<'day' | 'month' | 'year'>>;
  readonly view: 'day' | 'month' | 'year';
}

export default function useCalendarPicker({
  defaultView = 'day',
  onViewChange,
}: Partial<Props> = DEFAULT_PROPS): State {
  const [view, setView] = useState(defaultView);

  return {
    setView,
    view,

    handleViewChange: useHandler(
      onViewChange,
      (newView: 'day' | 'month' | 'year') => {
        setView(newView);
      },
    ),
  };
}
