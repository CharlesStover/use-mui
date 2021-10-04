# React hooks for Material UI

[![version](https://img.shields.io/npm/v/use-mui.svg)](https://www.npmjs.com/package/use-mui)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/use-mui.svg)](https://www.npmjs.com/package/use-mui)
[![downloads](https://img.shields.io/npm/dt/use-mui.svg)](https://www.npmjs.com/package/use-mui)
[![GitHub Action: Push](https://github.com/CharlesStover/use-mui/actions/workflows/push.yml/badge.svg)](https://github.com/CharlesStover/use-mui/actions/workflows/push.yml)

Description

## Install

- `npm install use-mui` or
- `yarn add use-mui`

## Supported components

### `Pagination`

```javascript
import Pagination from '@mui/material/Pagination';
import { usePagination } from 'use-mui';

function MyPagination() {
  const { handleChange, page } = usePagination();
  return <Pagination onChange={handleChange} page={page} />;
}
```

`usePagination` accepts one optional object parameter:

- `defaultPage` optionally specifies the default page.
- `onChange` optionally specifies a callback fired when the pagination changes.

### `TablePagination`

```javascript
import TablePagination from '@mui/material/TablePagination';
import { useTablePagination } from 'use-mui';

function MyTablePagination() {
  const { handlePageChange, handleRowsPerPageChange, page, rowsPerPage } =
    usePagination();
  return (
    <TablePagination
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleRowsPerPageChange}
      page={page}
      rowsPerPage={rowsPerPage}
    />
  );
}
```

`useTablePagination` accepts one optional object parameter:

- `defaultPage` optionally specifies the default page.
- `defaultRowsPerPage` optionally specifies the default rows per page.
- `onPageChange` optionally specifies a callback that fires when the page
  changes.
- `onRowsPerPageChange` optionally specifies a callback that fires when the rows
  per page change.

## Contributing

- `yarn set version latest`
- `yarn up "*" "@*/*"`
- If you use VIM, run `yarn sdks vim`.
- If you use Visual Studio Code, run `yarn sdks vscode`.
