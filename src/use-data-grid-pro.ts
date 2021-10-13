import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import DEFAULT_PROPS from './constants/default-props';
import useHandler from './hooks/use-handler';

interface GridFilterModel {
  readonly _: unknown;
}

interface GridSelectionModel {
  readonly _: unknown;
}

interface GridSortModel {
  readonly _: unknown;
}

interface Props {
  readonly defaultError?: Error | undefined;
  readonly defaultFilterModel?: GridFilterModel | undefined;
  readonly defaultPage?: number | undefined;
  readonly defaultPageSize?: number | undefined;
  readonly defaultSelectionModel?: GridSelectionModel | undefined;
  readonly defaultSortModel?: GridSortModel | undefined;
  readonly onError?: ((error: Error) => void) | undefined;
  readonly onFilterModelChange?: ((model: GridFilterModel) => void) | undefined;
  readonly onPageChange?: ((page: number) => void) | undefined;
  readonly onPageSizeChange?: ((pageSize: number) => void) | undefined;
  readonly onSortModelChange?: ((model: GridSortModel) => void) | undefined;
  readonly onSelectModelChange?:
    | ((model: GridSelectionModel) => void)
    | undefined;
}

export interface State {
  readonly error: Error | undefined;
  readonly filterModel: GridFilterModel | undefined;
  readonly handleError: (error: Error) => void;
  readonly handleFilterModelChange: (modal: GridFilterModel) => void;
  readonly handlePageChange: (page: number) => void;
  readonly handlePageSizeChange: (pageSize: number) => void;
  readonly handleSelectionModelChange: (model: GridSelectionModel) => void;
  readonly handleSortModelChange: (model: GridSortModel) => void;
  readonly page: number;
  readonly pageSize: number;
  readonly selectionModel: GridSelectionModel | undefined;
  readonly setError: Dispatch<SetStateAction<Error | undefined>>;
  readonly setPage: Dispatch<SetStateAction<number>>;
  readonly setPageSize: Dispatch<SetStateAction<number>>;
  readonly setSortModel: Dispatch<SetStateAction<GridSortModel | undefined>>;
  readonly sortModel: GridSortModel | undefined;
  readonly setFilterModel: Dispatch<
    SetStateAction<GridFilterModel | undefined>
  >;
  readonly setSelectionModel: Dispatch<
    SetStateAction<GridSelectionModel | undefined>
  >;
}

const DEFAULT_PAGE = 0;
const DEFAULT_PAGE_SIZE = 10;

export default function useDataGridPro({
  defaultError,
  defaultFilterModel,
  defaultPage = DEFAULT_PAGE,
  defaultPageSize = DEFAULT_PAGE_SIZE,
  defaultSelectionModel,
  defaultSortModel,
  onError,
  onFilterModelChange,
  onPageChange,
  onPageSizeChange,
  onSelectModelChange,
  onSortModelChange,
}: Partial<Props> = DEFAULT_PROPS): State {
  const [error, setError] = useState(defaultError);
  const [filterModel, setFilterModel] = useState(defaultFilterModel);
  const [page, setPage] = useState(defaultPage);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [selectionModel, setSelectionModel] = useState(defaultSelectionModel);
  const [sortModel, setSortModel] = useState(defaultSortModel);

  return {
    error,
    filterModel,
    handleError: useHandler(onError, setError),
    handleFilterModelChange: useHandler(onFilterModelChange, setFilterModel),
    handlePageChange: useHandler(onPageChange, setPage),
    handlePageSizeChange: useHandler(onPageSizeChange, setPageSize),
    handleSortModelChange: useHandler(onSortModelChange, setSortModel),
    page,
    pageSize,
    selectionModel,
    setError,
    setFilterModel,
    setPage,
    setPageSize,
    setSelectionModel,
    setSortModel,
    sortModel,
    handleSelectionModelChange: useHandler(
      onSelectModelChange,
      setSelectionModel,
    ),
  };
}
