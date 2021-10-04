import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';
import type ReadonlyChangeEvent from '../types/readonly-change-event';

export interface Props {
  readonly defaultPage?: number | undefined;
  readonly onChange?:
    | ((event: Readonly<ReadonlyChangeEvent>, page: number) => void)
    | undefined;
}

export interface State {
  readonly page: number;
  readonly setPage: Dispatch<SetStateAction<number>>;
  readonly handleChange: (
    event: Readonly<ReadonlyChangeEvent>,
    page: number,
  ) => void;
}

const DEFAULT_PAGE = 0;
const DEFAULT_PROPS: Props = {};

export default function usePagination(props: Props = DEFAULT_PROPS): State {
  const { defaultPage = DEFAULT_PAGE, onChange } = props;

  // States
  const [page, setPage] = useState(defaultPage);

  return {
    page,
    setPage,

    handleChange: useCallback(
      (e: Readonly<ReadonlyChangeEvent>, newPage: number): void => {
        setPage(newPage);
        if (typeof onChange === 'function') {
          onChange(e, newPage);
        }
      },
      [onChange],
    ),
  };
}
