# React hooks for Material UI

[![version](https://img.shields.io/npm/v/use-mui.svg)](https://www.npmjs.com/package/use-mui)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/use-mui.svg)](https://www.npmjs.com/package/use-mui)
[![downloads](https://img.shields.io/npm/dt/use-mui.svg)](https://www.npmjs.com/package/use-mui)
[![GitHub Action: Push](https://github.com/CharlesStover/use-mui/actions/workflows/push.yml/badge.svg)](https://github.com/CharlesStover/use-mui/actions/workflows/push.yml)

## Install

- `npm install use-mui` or
- `yarn add use-mui`

## Supported components

For each state, each hook accepts an optional default state and returns a
state-setting utility function (that you should not need but is available to fit
any edge cases your may have). For example: a component with a `value` prop will
have an accompanying hook with an optional `defaultValue` parameter property and
`setValue` state property; a component with an `open` prop will have an
accompanying hook with an optional `defaultOpen` parameter property and
`setOpen` state property.

```javascript
function MyTextField() {
  const { handleChange, setValue, value } = useTextField({
    defaultValue: 'Loading...',
  });

  useEffect(() => {
    getAsyncValue()
      .then(asyncValue => {
        setValue(asyncValue);
      })
      .catch(() => {
        setValue('');
      });
  }, [setValue]);

  return <TextField onChange={handleChange} value={value} />;
}
```

For each event handler, each hook accepts an optional callback function (that
you should not need but is available to fit any edge cases your may have; this
is particularly useful for manually monitoring logs and metrics). For example, a
component with an `onChange` prop will have an accompanying hook with an
`onChange` parameter property.

```javascript
function MyTextField() {
  const { handleChange, value } = useTextField({
    onChange(e) {
      alert(e.target.value);
    },
  });

  return <TextField onChange={handleChange} value={value} />;
}
```

### `DateRangePicker`

```javascript
import DateRangePicker from '@mui/material/DateRangePicker';
import { useDateRangePicker } from 'use-mui';

function MyDateRangePicker() {
  const { handleChange, handleClose, handleOpen, open, value } =
    useDateRangePicker();
  return (
    <DateRangePicker
      onChange={handleChange}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      value={value}
    />
  );
}
```

### `DateTimePicker`

```javascript
import DateTimePicker from '@mui/material/DateTimePicker';
import { useDateTimePicker } from 'use-mui';

function MyDateTimePicker() {
  const { handleChange, handleClose, handleOpen, open, value } =
    useDateTimePicker();
  return (
    <DateTimePicker
      onChange={handleChange}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      value={value}
    />
  );
}
```

### `Input`

The `Input` component is not yet implemented. Contributions are welcome!

### `OutlinedInput`

For the `OutlinedInput` component, use the [`useInput`](#input) hook.

### `Pagination`

```javascript
import Pagination from '@mui/material/Pagination';
import { usePagination } from 'use-mui';

function MyPagination() {
  const { handleChange, page } = usePagination();
  return <Pagination onChange={handleChange} page={page} />;
}
```

### `Popover`

```javascript
import Popover from '@mui/material/Popover';
import { usePopover } from 'use-mui';

function MyPopover() {
  const { handleClose, open, reason } = usePopover();
  return <Popover onClose={handleClose} open={open} reason={reason} />;
}
```

### `Radio`

```javascript
import Radio from '@mui/material/Radio';
import { useRadio } from 'use-mui';

function MyRadio() {
  const { checked, handleChange } = useRadio();
  return <Radio checked={checked} onChange={handleChange} />;
}
```

### `RadioGroup`

```javascript
import RadioGroup from '@mui/material/RadioGroup';
import { useRadioGroup } from 'use-mui';

function MyRadioGroup() {
  const { handleChange, value } = useRadioGroup();
  return <RadioGroup onChange={handleChange} value={value} />;
}
```

### `Rating`

```javascript
import Rating from '@mui/material/Rating';
import { useRating } from 'use-mui';

function MyRating() {
  const { handleChange, value } = useRating();
  return <Rating onChange={handleChange} value={value} />;
}
```

### `Select`

```javascript
import Select from '@mui/material/Select';
import { useSelect } from 'use-mui';

function MySelect() {
  const { handleChange, handleClose, handleOpen, open, value } = useSelect();
  return (
    <Select
      onChange={handleChange}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      value={value}
    />
  );
}
```

### `Slider`

```javascript
import Slider from '@mui/material/Slider';
import { useSlider } from 'use-mui';

function MySlider() {
  const { activeThumb, handleChange, value } = useSlider();
  return (
    <Slider activeThumb={activeThumb} onChange={handleChange} value={value} />
  );
}
```

### `SliderUnstyled`

For the `SliderUnstyled` component, use the [`useSlider`](#slider) hook.

### `Snackbar`

```javascript
import Snackbar from '@mui/material/Snackbar';
import { useSnackbar } from 'use-mui';

function MySnackbar() {
  const { handleClose, open, reason } = useSnackbar();
  return <Snackbar onClose={handleClose} open={open} reason={reason} />;
}
```

### `SpeedDial`

```javascript
import SpeedDial from '@mui/material/SpeedDial';
import { useSpeedDial } from 'use-mui';

function MySpeedDial() {
  const { handleClose, handleOpen, open } = useSpeedDial();
  return <SpeedDial onClose={handleClose} onOpen={handleOpen} open={open} />;
}
```

### `StaticDatePicker`

For the `StaticDatePicker` component, use the
[`useDateTimePicker`](#datetimepicker) hook.

### `StaticDateRangePicker`

For the `StaticDateRangePicker` component, use the
[`useDateRangePicker`](#daterangepicker) hook.

### `StaticDateTimePicker`

For the `StaticDateTimePicker` component, use the
[`useDateTimePicker`](#datetimepicker) hook.

### `StaticTimePicker`

For the `StaticTimePicker` component, use the
[`useDateTimePicker`](#datetimepicker) hook.

### `SwipeableDrawer`

```javascript
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useSwipeableDrawer } from 'use-mui';

function MySwipeableDrawer() {
  const { handleClose, handleOpen, open } = useSwipeableDrawer();
  return (
    <SwipeableDrawer onClose={handleClose} onOpen={handleOpen} open={open} />
  );
}
```

### `Switch`

```javascript
import Switch from '@mui/material/Switch';
import { useSwitch } from 'use-mui';

function MySwitch() {
  const { checked, handleChange } = useSwitch();
  return <Switch checked={checked} onChange={handleChange} />;
}
```

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

### `Tabs`

```javascript
import Tabs from '@mui/material/Tabs';
import { useTabs } from 'use-mui';

function MyTabs() {
  const { handleChange, value } = useTabs();
  return <Tabs onChange={handleChange} value={value} />;
}
```

### `TextField`

```javascript
import TextField from '@mui/material/TextField';
import { useTextField } from 'use-mui';

function MyTextField() {
  const { handleChange, value } = useTextField();
  return <TextField onChange={handleChange} value={value} />;
}
```

### `TimePicker`

For the `TimePicker` component, use the [`useDateTimePicker`](#datetimepicker)
hook.

### `ToggleButtonGroup`

```javascript
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useToggleButtonGroup } from 'use-mui';

function MyToggleButtonGroup() {
  const { handleChange, value } = useToggleButtonGroup();
  return <ToggleButtonGroup onChange={handleChange} value={value} />;
}
```

### `Tooltip`

```javascript
import Tooltip from '@mui/material/Tooltip';
import { useTooltip } from 'use-mui';

function MyTooltip() {
  const { handleClose, handleOpen, open } = useTooltip();
  return <Tooltip onClose={handleClose} onOpen={handleOpen} open={open} />;
}
```

### `TreeView`

```javascript
import TreeView from '@mui/material/TreeView';
import { useTreeView } from 'use-mui';

function MyTreeView() {
  const { expanded, handleNodeSelect, handleNodeToggle, selected } =
    useTreeView();
  return (
    <TreeView
      expanded={expanded}
      onNodeSelect={handleNodeSelect}
      onNodeToggle={handleNodeToggle}
      selected={selected}
    />
  );
}
```

## Contributing

To contribute to this repository, start by running the following commands.

- To keep Yarn up to date, run `yarn set version latest`.
- To keep dependencies up to date, run `yarn up "*" "@*/*"`.
- If you use VIM, run `yarn sdks vim`.
- If you use Visual Studio Code, run `yarn sdks vscode`.

To test your changes for validity, use the following scripts:

- To build your changes, run `yarn rollup`.
- To build your changes in watch mode, run `yarn rollup-watch`.
- To lint your changes, run `yarn eslint`.
- To unit test your changes, run `yarn jest`.
- To unit test your changes in watch mode, run `yarn jest-watch`.
