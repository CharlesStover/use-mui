import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';

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

const DEFAULT_PROPS: Props = {};
const DEFAULT_VALUE = 0;

export default function useTextField(props: Props = DEFAULT_PROPS): State {
  const { defaultActiveThumb, defaultValue = DEFAULT_VALUE, onChange } = props;

  const [activeThumb, setActiveThumb] = useState(defaultActiveThumb);
  const [value, setValue] = useState(defaultValue);

  return {
    activeThumb,
    setActiveThumb,
    setValue,
    value,

    handleChange: useCallback(
      (
        e: Event,
        newValue: number | readonly number[],
        newActiveThumb: number,
      ): void => {
        setActiveThumb(newActiveThumb);
        setValue(newValue);
        if (typeof onChange === 'function') {
          onChange(e, newValue, newActiveThumb);
        }
      },
      [onChange],
    ),
  };
}
