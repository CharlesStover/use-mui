import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

export interface Props {
  readonly defaultPage?: number | undefined;
  readonly onChange?:
    | ((event: ChangeEvent<unknown>, page: number) => void)
    | undefined;
}

export interface State {
  readonly handleChange: (event: ChangeEvent<unknown>, page: number) => void;
  readonly page: number;
  readonly setPage: Dispatch<SetStateAction<number>>;
}

const DEFAULT_PAGE = 0;

export default function usePagination({
  defaultPage = DEFAULT_PAGE,
  onChange,
}: Partial<Props> = DEFAULT_PROPS): State {
  // States
  const [page, setPage] = useState(defaultPage);

  return {
    page,
    setPage,

    handleChange: useHandler(
      onChange,
      (_event: ChangeEvent<unknown>, newPage: number): void => {
        setPage(newPage);
      },
    ),
  };
}
