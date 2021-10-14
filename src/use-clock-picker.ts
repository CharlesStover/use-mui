// import type { ClockView } from '@mui/lab/ClockPicker';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

interface Props {
  readonly defaultDate?: unknown | undefined;
  readonly defaultView?: 'hours' | 'minutes' | 'seconds' | undefined;
  readonly onChange?: ((date: unknown) => void) | undefined;
  readonly onViewChange?:
    | ((view: 'hours' | 'minutes' | 'seconds') => void)
    | undefined;
}

export interface State {
  readonly date: unknown;
  readonly handleChange: (date: unknown) => void;
  readonly handleViewChange: (view: 'hours' | 'minutes' | 'seconds') => void;
  readonly setDate: Dispatch<SetStateAction<unknown>>;
  readonly setView: Dispatch<SetStateAction<'hours' | 'minutes' | 'seconds'>>;
  readonly view: 'hours' | 'minutes' | 'seconds';
}

export default function useClockPicker({
  defaultDate = null,
  defaultView = 'hours',
  onChange,
  onViewChange,
}: Partial<Props> = DEFAULT_PROPS): State {
  const [date, setDate] = useState(defaultDate);
  const [view, setView] = useState(defaultView);

  return {
    date,
    handleChange: useHandler(onChange, setDate),
    handleViewChange: useHandler(onViewChange, setView),
    setDate,
    setView,
    view,
  };
}
