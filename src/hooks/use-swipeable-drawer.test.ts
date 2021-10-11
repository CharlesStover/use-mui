import { useSwipeableDrawer } from '..';
import describeHandler from '../test-utils/describe-handler';
import describeHook from '../test-utils/describe-hook';

describeHook(
  useSwipeableDrawer,
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
    describeHandler(useSwipeableDrawer, {
      args: [],
      callback: 'onClose',
      defaultGetter: 'defaultOpen',
      defaultValue: true,
      getter: 'open',
      handler: 'handleClose',
      value: false,
    });

    describeHandler(useSwipeableDrawer, {
      args: [],
      callback: 'onOpen',
      defaultGetter: 'defaultOpen',
      defaultValue: false,
      getter: 'open',
      handler: 'handleOpen',
      value: true,
    });
  },
);
