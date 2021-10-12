import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

interface Props {
  readonly defaultActiveThumb?: number | undefined;
  readonly defaultValue?: number | readonly number[] | undefined;
  readonly onChange?:
    | ((
        event: Event,
        value: number | readonly number[],
        activeThumb: number,
      ) => void)
    | undefined;
}

export interface State {
  readonly activeThumb: number | undefined;
  readonly setActiveThumb: Dispatch<SetStateAction<number | undefined>>;
  readonly setValue: Dispatch<SetStateAction<number | readonly number[]>>;
  readonly value: number | readonly number[];
  readonly handleChange: (
    event: Event,
    value: number | readonly number[],
    activeThumb: number,
  ) => void;
}

const DEFAULT_VALUE = 0;

export default function useSlider({
  defaultActiveThumb,
  defaultValue = DEFAULT_VALUE,
  onChange,
}: Props = DEFAULT_PROPS): State {
  const [activeThumb, setActiveThumb] = useState(defaultActiveThumb);
  const [value, setValue] = useState(defaultValue);

  return {
    activeThumb,
    setActiveThumb,
    setValue,
    value,

    handleChange: useHandler(
      onChange,
      (
        _event: Event,
        newValue: number | readonly number[],
        newActiveThumb: number,
      ): void => {
        setActiveThumb(newActiveThumb);
        setValue(newValue);
      },
    ),
  };
}
