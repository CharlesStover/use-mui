import type {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
} from '@mui/material/Autocomplete';
import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { useState } from 'react';
import DEFAULT_AUTOCOMPLETE_MULTIPLE_VALUE from './constants/default-autocomplete-multiple-value';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

export interface Props<T, M extends boolean | undefined> {
  readonly defaultChangeDetails?: AutocompleteChangeDetails<T> | undefined;
  readonly defaultChangeReason?: AutocompleteChangeReason | undefined;
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
  readonly onChange?:
    | ((
        event: SyntheticEvent,
        value: M extends true ? readonly T[] : T,
        reason: AutocompleteChangeReason,
        details?: AutocompleteChangeDetails<T>,
      ) => void)
    | undefined;
  readonly onInputChange?:
    | ((event: SyntheticEvent, value: string, reason: string) => void)
    | undefined;
}

export interface State<T = unknown, M extends boolean | undefined = false> {
  readonly changeDetails: AutocompleteChangeDetails<T> | undefined;
  readonly changeReason: string | undefined;
  readonly closeReason: string | undefined;
  readonly handleClose: (event: SyntheticEvent, reason: string) => void;
  readonly handleOpen: (event: SyntheticEvent) => void;
  readonly inputReason: string | undefined;
  readonly inputValue: string;
  readonly setCloseReason: Dispatch<SetStateAction<string | undefined>>;
  readonly setInputReason: Dispatch<SetStateAction<string | undefined>>;
  readonly setInputValue: Dispatch<SetStateAction<string>>;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
  readonly open: boolean;
  readonly value: M extends true ? readonly T[] : T | null;
  readonly handleChange: (
    event: SyntheticEvent,
    value: M extends true ? readonly T[] : T,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<T>,
  ) => void;
  readonly handleInputChange: (
    event: SyntheticEvent,
    value: string,
    reason: string,
  ) => void;
  readonly setChangeDetails: Dispatch<
    SetStateAction<AutocompleteChangeDetails<T> | undefined>
  >;
  readonly setChangeReason: Dispatch<
    SetStateAction<AutocompleteChangeReason | undefined>
  >;
  readonly setValue: Dispatch<
    SetStateAction<M extends true ? readonly T[] : T | null>
  >;
}

export default function useAutocomplete<T>(
  props?: Partial<Props<T, true>> | undefined,
): State<T, true>;
export default function useAutocomplete<T>(
  props?: Partial<Props<T, false | undefined>> | undefined,
): State<T, false | undefined>;
export default function useAutocomplete<T>(
  props?: Partial<Props<T, boolean | undefined>> | undefined,
): State<T, boolean | undefined>;
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
}: Partial<Props<T, M>> = DEFAULT_PROPS): State<T, M> {
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

    handleChange: useHandler(
      onChange,
      (
        _e: SyntheticEvent,
        newValue: M extends true ? readonly T[] : T,
        newReason: AutocompleteChangeReason,
        newDetails?: AutocompleteChangeDetails<T> | undefined,
      ): void => {
        setValue(newValue);
        setChangeReason(newReason);
        setChangeDetails(newDetails);
      },
    ),

    handleClose: useHandler(
      onClose,
      (_event: SyntheticEvent, newReason: string) => {
        setOpen(false);
        setCloseReason(newReason);
      },
    ),

    handleInputChange: useHandler(
      onInputChange,
      (_event: SyntheticEvent, newValue: string, newReason: string): void => {
        setInputValue(newValue);
        setInputReason(newReason);
      },
    ),

    handleOpen: useHandler(onOpen, (): void => {
      setOpen(true);
    }),
  };
}
