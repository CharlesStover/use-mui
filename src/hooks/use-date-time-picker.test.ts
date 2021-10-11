import { useDateTimePicker } from '..';
import describeHandler from '../test-utils/describe-handler';
import describeHook from '../test-utils/describe-hook';

const NOW: Date = new Date();

describeHook(
  useDateTimePicker,
  [
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
  ],
  (): void => {
    describeHandler(useDateTimePicker, {
      handler: 'handleClose',
      args: [],
      getter: 'open',
      value: false,
      callback: 'onClose',
      defaultGetter: 'defaultOpen',
      defaultValue: true,
    });
  },
);
