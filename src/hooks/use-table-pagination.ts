import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from 'react';
import { useCallback, useState } from 'react';

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

const DEFAULT_PROPS: Props = {};
const DEFAULT_ROWS_PER_PAGE = -1;
const FIRST_PAGE = 0;
const DEFAULT_PAGE = FIRST_PAGE;

export default function useTablePagination(
  props: Props = DEFAULT_PROPS,
): State {
  const {
    defaultPage = DEFAULT_PAGE,
    defaultRowsPerPage = DEFAULT_ROWS_PER_PAGE,
    onPageChange,
    onRowsPerPageChange,
  } = props;

  // States
  const [page, setPage] = useState(defaultPage);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  return {
    page,
    rowsPerPage,
    setPage,
    setRowsPerPage,

    handlePageChange: useCallback(
      (e: MouseEvent<HTMLButtonElement> | null, newPage: number): void => {
        setPage(newPage);
        if (typeof onPageChange === 'function') {
          onPageChange(e, newPage);
        }
      },
      [onPageChange],
    ),

    handleRowsPerPageChange: useCallback(
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPage(FIRST_PAGE);

        const newRowsPerPage: number = parseInt(e.target.value, 10);
        setRowsPerPage(newRowsPerPage);

        if (typeof onRowsPerPageChange === 'function') {
          onRowsPerPageChange(e);
        }
      },
      [onRowsPerPageChange],
    ),
  };
}
