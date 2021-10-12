import { useAutocomplete } from '..';
import DEFAULT_AUTOCOMPLETE_MULTIPLE_VALUE from '../constants/default-autocomplete-multiple-value';
import describeHook from '../test-utils/describe-hook';
// import TestChangeEvent from '../test-utils/test-change-event';

describeHook(useAutocomplete, [
  {
    defaultGetter: 'defaultChangeReason',
    defaultValue: undefined,
    getter: 'changeReason',
    setter: 'setChangeReason',
    value: 'test change reason',
  },
  {
    defaultGetter: 'defaultCloseReason',
    defaultValue: undefined,
    getter: 'closeReason',
    setter: 'setCloseReason',
    value: 'test close reason',
  },
  {
    defaultGetter: 'defaultDetails',
    defaultValue: undefined,
    getter: 'details',
    setter: 'setDetails',
    value: 'test details',
  },
  {
    defaultGetter: 'defaultInputReason',
    defaultValue: undefined,
    getter: 'inputReason',
    setter: 'setInputReason',
    value: 'test input reason',
  },
  {
    defaultGetter: 'defaultInputValue',
    defaultValue: '',
    getter: 'inputValue',
    setter: 'setInputValue',
    value: 'test input value',
  },
  {
    defaultGetter: 'defaultOpen',
    defaultValue: false,
    getter: 'open',
    setter: 'setOpen',
    value: true,
  },
  {
    defaultGetter: 'defaultReason',
    defaultValue: undefined,
    getter: 'reason',
    setter: 'setReason',
    value: 'test reason',
  },
  {
    defaultGetter: 'defaultValue',
    defaultValue: null,
    getter: 'value',
    setter: 'setValue',
    value: 'test value',
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
]);
