import type { SyntheticEvent } from 'react';
import { useSelect } from '..';
import describeGetterSetter from '../test-utils/describe-getter-setter';
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
    describeGetterSetter(useSelect, {
      defaultGetter: 'defaultOpen',
      defaultValue: false,
      getter: 'open',
      setter: 'setOpen',
      value: true,
    });

    describeHandler(
      useSelect,
      'handleClose',
      [new TestChangeEvent()],
      'open',
      false,
      'onClose',
      'defaultOpen',
      true,
    );

    describeHandler(
      useSelect,
      'handleOpen',
      [new TestChangeEvent()],
      'open',
      true,
      'onOpen',
    );
  },
);
