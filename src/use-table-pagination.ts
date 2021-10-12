import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

export interface Props {
  readonly defaultPage?: number | undefined;
  readonly defaultRowsPerPage?: number | undefined;
  readonly onPageChange?:
    | ((event: MouseEvent<HTMLButtonElement> | null, page: number) => void)
    | undefined;
  readonly onRowsPerPageChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export interface State {
  readonly page: number;
  readonly rowsPerPage: number;
  readonly setPage: Dispatch<SetStateAction<number>>;
  readonly setRowsPerPage: Dispatch<SetStateAction<number>>;
  readonly handlePageChange: (
    event: MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => void;
  readonly handleRowsPerPageChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const DEFAULT_PAGE = 0;
const DEFAULT_ROWS_PER_PAGE = -1;
const FIRST_PAGE = 0;

export default function useTablePagination({
  defaultPage = DEFAULT_PAGE,
  defaultRowsPerPage = DEFAULT_ROWS_PER_PAGE,
  onPageChange,
  onRowsPerPageChange,
}: Props = DEFAULT_PROPS): State {
  // States
  const [page, setPage] = useState(defaultPage);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  return {
    page,
    rowsPerPage,
    setPage,
    setRowsPerPage,

    handlePageChange: useHandler(
      onPageChange,
      (_event: MouseEvent<HTMLButtonElement> | null, newPage: number): void => {
        setPage(newPage);
      },
    ),

    handleRowsPerPageChange: useHandler(
      onRowsPerPageChange,
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPage(FIRST_PAGE);

        const newRowsPerPage: number = parseInt(e.target.value, 10);
        setRowsPerPage(newRowsPerPage);
      },
    ),
  };
}
