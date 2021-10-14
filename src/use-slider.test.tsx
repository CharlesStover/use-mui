import Slider from '@mui/material/Slider';
import type { ReactElement } from 'react';
import type { SliderState } from '.';
import { useSlider } from '.';
import describeHook from './test-utils/describe-hook';

const TEST_ACTIVE_THUMB = 99;
const TEST_VALUE = 21;

describeHook(
  useSlider,
  ({ handleChange, value }: SliderState): ReactElement => (
    <Slider onChange={handleChange} value={value} />
  ),
  [
    {
      defaultGetter: 'defaultActiveThumb',
      defaultValue: undefined,
      getter: 'activeThumb',
      setter: 'setActiveThumb',
      value: TEST_ACTIVE_THUMB,
    },
    {
      defaultGetter: 'defaultValue',
      defaultValue: 0,
      getter: 'value',
      setter: 'setValue',
      value: TEST_VALUE,
    },
    {
      args: [new Event('change'), TEST_VALUE, TEST_ACTIVE_THUMB],
      callback: 'onChange',
      handler: 'handleChange',
      states: {
        activeThumb: TEST_ACTIVE_THUMB,
        value: TEST_VALUE,
      },
    },
  ],
);
