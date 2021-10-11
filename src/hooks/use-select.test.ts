import type { SyntheticEvent } from 'react';
import { useSelect } from '..';
import describeHandler from '../test-utils/describe-handler';
import describeHook from '../test-utils/describe-hook';
import mapValueToTestChangeEvent from '../test-utils/map-value-to-test-change-event';
import TestChangeEvent from '../test-utils/test-change-event';

const TEST_VALUE = 'test value';
const TEST_CHANGE_EVENT: SyntheticEvent = mapValueToTestChangeEvent(TEST_VALUE);

describeHook(
  useSelect,
  [
    {
      defaultGetter: 'defaultOpen',
      defaultValue: false,
      getter: 'open',
      setter: 'setOpen',
      value: true,
    },
    {
      args: [TEST_CHANGE_EVENT, undefined],
      callback: 'onChange',
      defaultGetter: 'defaultValue',
      defaultValue: '',
      getter: 'value',
      handler: 'handleChange',
      setter: 'setValue',
      value: TEST_VALUE,
    },
  ],
  (): void => {
    describeHandler(useSelect, {
      args: [new TestChangeEvent()],
      callback: 'onClose',
      defaultGetter: 'defaultOpen',
      defaultValue: true,
      getter: 'open',
      handler: 'handleClose',
      value: false,
    });

    describeHandler(useSelect, {
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
