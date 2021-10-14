import Rating from '@mui/material/Rating';
import type { ReactElement } from 'react';
import type { RatingState } from '.';
import { useRating } from '.';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

describeHook(
  useRating,
  ({ handleChange, value }: RatingState): ReactElement => (
    <Rating onChange={handleChange} value={value} />
  ),
  [
    {
      args: [new TestChangeEvent(), 'test value'],
      callback: 'onChange',
      defaultGetter: 'defaultValue',
      defaultValue: null,
      getter: 'value',
      handler: 'handleChange',
      setter: 'setValue',
      value: 'test value',
    },
  ],
);
