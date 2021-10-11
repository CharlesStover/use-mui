import { useSpeedDial } from '..';
import describeHandler from '../test-utils/describe-handler';
import describeHook from '../test-utils/describe-hook';
import TestChangeEvent from '../test-utils/test-change-event';

describeHook(
  useSpeedDial,
  [
    {
      defaultGetter: 'defaultOpen',
      defaultValue: false,
      getter: 'open',
      setter: 'setOpen',
      value: true,
    },
  ],
  (): void => {
    describeHandler(useSpeedDial, {
      args: [new TestChangeEvent()],
      callback: 'onClose',
      defaultGetter: 'defaultOpen',
      defaultValue: true,
      getter: 'open',
      handler: 'handleClose',
      value: false,
    });

    describeHandler(useSpeedDial, {
      args: [new TestChangeEvent()],
      callback: 'onOpen',
      defaultGetter: 'defaultOpen',
      defaultValue: false,
      getter: 'open',
      handler: 'handleOpen',
      value: true,
    });
  },
);
