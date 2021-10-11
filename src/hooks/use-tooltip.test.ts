import { useTooltip } from '..';
import describeHandler from '../test-utils/describe-handler';
import describeHook from '../test-utils/describe-hook';
import TestChangeEvent from '../test-utils/test-change-event';

describeHook(
  useTooltip,
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
    describeHandler(useTooltip, {
      args: [new TestChangeEvent()],
      callback: 'onClose',
      defaultGetter: 'defaultOpen',
      defaultValue: true,
      getter: 'open',
      handler: 'handleClose',
      value: false,
    });

    describeHandler(useTooltip, {
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
