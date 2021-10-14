import type { ReactElement } from 'react';
import { useCalendarPicker } from '.';
import describeHook from './test-utils/describe-hook';

const TEST_VIEW = 'year';

describeHook(useCalendarPicker, (): ReactElement => <>{null}</>, [
  {
    args: [TEST_VIEW],
    callback: 'onViewChange',
    defaultGetter: 'defaultView',
    defaultValue: 'day',
    getter: 'view',
    handler: 'handleViewChange',
    setter: 'setView',
    value: TEST_VIEW,
  },
]);
