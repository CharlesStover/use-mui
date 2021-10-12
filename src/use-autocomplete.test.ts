import { useAutocomplete } from '.';
import DEFAULT_AUTOCOMPLETE_MULTIPLE_VALUE from './constants/default-autocomplete-multiple-value';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

const TEST_CHANGE_REASON = 'test change reason';
const TEST_CLOSE_REASON = 'test close reason';
const TEST_CHANGE_DETAILS = 'test change details';
const TEST_INPUT_REASON = 'test input reason';
const TEST_INPUT_VALUE = 'test input value';
const TEST_VALUE = 'test value';

describeHook(useAutocomplete, [
  {
    defaultGetter: 'defaultChangeDetails',
    defaultValue: undefined,
    getter: 'changeDetails',
    setter: 'setChangeDetails',
    value: TEST_CHANGE_DETAILS,
  },
  {
    defaultGetter: 'defaultChangeReason',
    defaultValue: undefined,
    getter: 'changeReason',
    setter: 'setChangeReason',
    value: TEST_CHANGE_REASON,
  },
  {
    defaultGetter: 'defaultCloseReason',
    defaultValue: undefined,
    getter: 'closeReason',
    setter: 'setCloseReason',
    value: TEST_CLOSE_REASON,
  },
  {
    defaultGetter: 'defaultInputReason',
    defaultValue: undefined,
    getter: 'inputReason',
    setter: 'setInputReason',
    value: TEST_INPUT_REASON,
  },
  {
    defaultGetter: 'defaultInputValue',
    defaultValue: '',
    getter: 'inputValue',
    setter: 'setInputValue',
    value: TEST_INPUT_VALUE,
  },
  {
    defaultGetter: 'defaultOpen',
    defaultValue: false,
    getter: 'open',
    setter: 'setOpen',
    value: true,
  },
  {
    defaultGetter: 'defaultValue',
    defaultValue: null,
    getter: 'value',
    setter: 'setValue',
    value: TEST_VALUE,
  },
  {
    defaultGetter: 'defaultValue',
    defaultValue: DEFAULT_AUTOCOMPLETE_MULTIPLE_VALUE,
    getter: 'value',
    setter: 'setValue',
    value: ['test', 'value'],
    props: {
      multiple: true,
    },
  },
  {
    callback: 'onChange',
    handler: 'handleChange',
    args: [
      new TestChangeEvent(),
      TEST_VALUE,
      TEST_CHANGE_REASON,
      TEST_CHANGE_DETAILS,
    ],
    states: {
      changeDetails: TEST_CHANGE_DETAILS,
      changeReason: TEST_CHANGE_REASON,
      value: TEST_VALUE,
    },
  },
  {
    args: [new TestChangeEvent(), TEST_CLOSE_REASON],
    callback: 'onClose',
    handler: 'handleClose',
    props: {
      defaultOpen: true,
    },
    states: {
      closeReason: TEST_CLOSE_REASON,
      open: false,
    },
  },
  {
    args: [new TestChangeEvent(), TEST_INPUT_VALUE, TEST_INPUT_REASON],
    callback: 'onInputChange',
    handler: 'handleInputChange',
    states: {
      inputReason: TEST_INPUT_REASON,
      inputValue: TEST_INPUT_VALUE,
    },
  },
  {
    args: [new TestChangeEvent()],
    callback: 'onOpen',
    handler: 'handleOpen',
    states: {
      open: true,
    },
  },
]);
