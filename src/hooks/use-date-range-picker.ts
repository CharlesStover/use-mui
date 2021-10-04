import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';

interface Props {
  readonly defaultOpen?: boolean | undefined;
  readonly defaultValue?:
    | [
        Date | number | string | null | undefined,
        Date | number | string | null | undefined,
      ]
    | undefined;
  readonly onClose?: (() => void) | undefined;
  readonly onOpen?: (() => void) | undefined;
  readonly onChange?:
    | ((
        value: [
          Date | number | string | null | undefined,
          Date | number | string | null | undefined,
        ],
      ) => void)
    | undefined;
}

export interface State {
  readonly handleClose: () => void;
  readonly handleOpen: () => void;
  readonly open: boolean;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
  readonly handleChange: (
    value: [
      Date | number | string | null | undefined,
      Date | number | string | null | undefined,
    ],
  ) => void;
  readonly setValue: Dispatch<
    SetStateAction<
      [
        Date | number | string | null | undefined,
        Date | number | string | null | undefined,
      ]
    >
  >;
  readonly value: [
    Date | number | string | null | undefined,
    Date | number | string | null | undefined,
  ];
}

const DEFAULT_PROPS: Props = {};
const DEFAULT_VALUE: [null, null] = [null, null];

export default function useDateRangePicker(
  props: Props = DEFAULT_PROPS,
): State {
  const {
    defaultOpen = false,
    defaultValue = DEFAULT_VALUE,
    onChange,
    onClose,
    onOpen,
  } = props;

  const [open, setOpen] = useState(defaultOpen);
  const [value, setValue] = useState(defaultValue);

  return {
    open,
    setOpen,
    setValue,
    value,

    handleChange: useCallback(
      (
        newValue: [
          Date | number | string | null | undefined,
          Date | number | string | null | undefined,
        ],
      ): void => {
        setValue(newValue);
        if (typeof onChange === 'function') {
          onChange(newValue);
        }
      },
      [onChange],
    ),

    handleClose: useCallback((): void => {
      setOpen(false);
      if (typeof onClose === 'function') {
        onClose();
      }
    }, [onClose]),

    handleOpen: useCallback((): void => {
      setOpen(true);
      if (typeof onOpen === 'function') {
        onOpen();
      }
    }, [onOpen]),
  };
}
