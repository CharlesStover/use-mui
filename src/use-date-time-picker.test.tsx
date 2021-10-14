import type { ReactElement } from 'react';
import { useDateTimePicker } from '.';
import describeHook from './test-utils/describe-hook';

const NOW: Date = new Date();

describeHook(useDateTimePicker, (): ReactElement => <>{null}</>, [
  {
    args: [],
    callback: 'onOpen',
    defaultGetter: 'defaultOpen',
    defaultValue: false,
    getter: 'open',
    handler: 'handleOpen',
    setter: 'setOpen',
    value: true,
  },
  {
    args: [NOW],
    callback: 'onChange',
    defaultGetter: 'defaultValue',
    defaultValue: undefined,
    getter: 'value',
    handler: 'handleChange',
    setter: 'setValue',
    value: NOW,
  },
  {
    args: [],
    callback: 'onClose',
    handler: 'handleClose',
    props: {
      defaultOpen: true,
    },
    states: {
      open: false,
    },
  },
]);
