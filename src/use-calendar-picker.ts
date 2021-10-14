// import type { CalendarPickerView } from '@mui/lab/CalendarPicker';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

interface Props<T = unknown> {
  readonly defaultDate?: T;
  readonly defaultView?: 'day' | 'month' | 'year' | undefined;
  readonly onChange?: ((date: T) => void) | undefined;
  readonly onViewChange?:
    | ((view: 'day' | 'month' | 'year') => void)
    | undefined;
}

export interface State<T = unknown> {
  readonly date: T | undefined;
  readonly handleChange: (date: T) => void;
  readonly handleViewChange: (view: 'day' | 'month' | 'year') => void;
  readonly setDate: Dispatch<SetStateAction<T | undefined>>;
  readonly setView: Dispatch<SetStateAction<'day' | 'month' | 'year'>>;
  readonly view: 'day' | 'month' | 'year';
}

export default function useCalendarPicker<T>({
  defaultDate,
  defaultView = 'day',
  onChange,
  onViewChange,
}: Partial<Props<T>> = DEFAULT_PROPS): State<T> {
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
