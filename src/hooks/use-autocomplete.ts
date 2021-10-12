import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useCallback, useState } from 'react';
import DEFAULT_AUTOCOMPLETE_MULTIPLE_VALUE from '../constants/default-autocomplete-multiple-value';
import DEFAULT_PROPS from '../constants/default-props';

export interface Props<T, M extends boolean | undefined> {
  readonly defaultChangeDetails?: string | undefined;
  readonly defaultChangeReason?: string | undefined;
  readonly defaultCloseReason?: string | undefined;
  readonly defaultInputReason?: string | undefined;
  readonly defaultInputValue?: string | undefined;
  readonly defaultOpen?: boolean | undefined;
  readonly multiple?: M;
  readonly onClose?: (event: SyntheticEvent, reason: string) => void;
  readonly onOpen?: (event: SyntheticEvent) => void;
  readonly defaultValue?:
    | (M extends true ? readonly T[] : T | null)
    | undefined;
  readonly onChange?: (
    event: SyntheticEvent,
    value: M extends true ? readonly T[] : T,
    reason: string,
    details?: string,
  ) => void;
  readonly onInputChange?: (
    event: SyntheticEvent,
    value: string,
    reason: string,
  ) => void;
}

export interface State<T, M extends boolean | undefined> {
  readonly changeDetails: string | undefined;
  readonly changeReason: string | undefined;
  readonly closeReason: string | undefined;
  readonly handleClose: (event: SyntheticEvent, reason: string) => void;
  readonly handleOpen: (event: SyntheticEvent) => void;
  readonly inputReason: string | undefined;
  readonly inputValue: string;
  readonly setChangeDetails: Dispatch<SetStateAction<string | undefined>>;
  readonly setChangeReason: Dispatch<SetStateAction<string | undefined>>;
  readonly setCloseReason: Dispatch<SetStateAction<string | undefined>>;
  readonly setInputReason: Dispatch<SetStateAction<string | undefined>>;
  readonly setInputValue: Dispatch<SetStateAction<string>>;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
  readonly open: boolean;
  readonly value: M extends true ? readonly T[] : T | null;
  readonly handleChange: (
    event: SyntheticEvent,
    value: M extends true ? readonly T[] : T,
    reason: string,
    details?: string,
  ) => void;
  readonly handleInputChange: (
    event: SyntheticEvent,
    value: string,
    reason: string,
  ) => void;
  readonly setValue: Dispatch<
    SetStateAction<M extends true ? readonly T[] : T | null>
  >;
}

export default function useAutocomplete<T>(
  props: Props<T, true>,
): State<T, true>;
export default function useAutocomplete<T>(
  props: Props<T, false | undefined>,
): State<T, false | undefined>;
export default function useAutocomplete<T, M extends boolean | undefined>({
  defaultChangeDetails,
  defaultChangeReason,
  defaultCloseReason,
  defaultInputReason,
  defaultInputValue = '',
  defaultOpen = false,
  defaultValue,
  multiple = false,
  onChange,
  onClose,
  onInputChange,
  onOpen,
}: Props<T, M> = DEFAULT_PROPS): State<T, M> {
  const getDefaultValue = (): M extends true ? readonly T[] : T | null => {
    if (typeof defaultValue !== 'undefined') {
      return defaultValue;
    }

    // When `M` is `true`, return `readonly unknown[]`.
    if (multiple) {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return DEFAULT_AUTOCOMPLETE_MULTIPLE_VALUE as M extends true
        ? readonly T[]
        : null;
    }

    // When `M` is `false` (or `undefined`), return `null`.
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return null as M extends true ? readonly T[] : null;
  };

  // States
  const [changeReason, setChangeReason] = useState(defaultChangeReason);
  const [closeReason, setCloseReason] = useState(defaultCloseReason);
  const [changeDetails, setChangeDetails] = useState(defaultChangeDetails);
  const [inputReason, setInputReason] = useState(defaultInputReason);
  const [inputValue, setInputValue] = useState(defaultInputValue);
  const [open, setOpen] = useState(defaultOpen);
  const [value, setValue] = useState(getDefaultValue);

  return {
    changeDetails,
    changeReason,
    closeReason,
    inputReason,
    inputValue,
    open,
    setChangeDetails,
    setChangeReason,
    setCloseReason,
    setInputReason,
    setInputValue,
    setOpen,
    setValue,
    value,

    handleChange: useCallback(
      (
        e: SyntheticEvent,
        newValue: M extends true ? readonly T[] : T,
        newReason: string,
        newDetails?: string | undefined,
      ): void => {
        setValue(newValue);
        setChangeReason(newReason);
        setChangeDetails(newDetails);
        if (typeof onChange === 'function') {
          onChange(e, newValue, newReason, newDetails);
        }
      },
      [onChange],
    ),

    handleClose: useCallback(
      (e: SyntheticEvent, newReason: string) => {
        setOpen(false);
        setCloseReason(newReason);
        if (typeof onClose === 'function') {
          onClose(e, newReason);
        }
      },
      [onClose],
    ),

    handleInputChange: useCallback(
      (e: SyntheticEvent, newValue: string, newReason: string): void => {
        setInputValue(newValue);
        setInputReason(newReason);
        if (typeof onInputChange === 'function') {
          onInputChange(e, newValue, newReason);
        }
      },
      [onInputChange],
    ),

    handleOpen: useCallback(
      (e: SyntheticEvent): void => {
        setOpen(true);
        if (typeof onOpen === 'function') {
          onOpen(e);
        }
      },
      [onOpen],
    ),
  };
}
