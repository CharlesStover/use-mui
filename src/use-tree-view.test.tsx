import type { ReactElement } from 'react';
import { useTreeView } from '.';
import DEFAULT_TREE_VIEW_EXPANDED from './constants/default-tree-view-expanded';
import DEFAULT_TREE_VIEW_SELECTED from './constants/default-tree-view-selected';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

const TEST_EXPANDED: string[] = ['test', 'expanded'];
const TEST_SELECTED: string[] = ['test', 'selected'];

describeHook(useTreeView, (): ReactElement => <>{null}</>, [
  {
    args: [new TestChangeEvent(), TEST_EXPANDED],
    callback: 'onNodeToggle',
    defaultGetter: 'defaultExpanded',
    defaultValue: DEFAULT_TREE_VIEW_EXPANDED,
    getter: 'expanded',
    handler: 'handleNodeToggle',
    setter: 'setExpanded',
    value: TEST_EXPANDED,
  },

  {
    args: [new TestChangeEvent(), TEST_SELECTED],
    callback: 'onNodeSelect',
    defaultGetter: 'defaultSelected',
    defaultValue: DEFAULT_TREE_VIEW_SELECTED,
    getter: 'selected',
    handler: 'handleNodeSelect',
    setter: 'setSelected',
    value: TEST_SELECTED,
  },
]);
