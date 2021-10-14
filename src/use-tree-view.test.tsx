import TreeView from '@mui/lab/TreeView';
import type { ReactElement } from 'react';
import type { TreeViewState } from '.';
import { useTreeView } from '.';
import DEFAULT_TREE_VIEW_EXPANDED from './constants/default-tree-view-expanded';
import DEFAULT_TREE_VIEW_SELECTED from './constants/default-tree-view-selected';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

const TEST_EXPANDED: readonly string[] = ['test', 'expanded'];
const TEST_SELECTED_ARRAY: readonly string[] = ['test', 'selected'];
const TEST_SELECTED_STRING = 'test selected string';

describeHook(
  useTreeView,
  ({
    expanded,
    handleNodeSelect,
    handleNodeToggle,
    selected,
  }: TreeViewState): ReactElement => (
    <TreeView
      expanded={expanded}
      onNodeSelect={handleNodeSelect}
      onNodeToggle={handleNodeToggle}
      selected={selected}
    />
  ),
  [
    {
      args: [new TestChangeEvent(), TEST_EXPANDED],
      callback: 'onNodeToggle',
      defaultGetter: 'defaultExpanded',
      defaultValue: DEFAULT_TREE_VIEW_EXPANDED,
      getter: 'expanded',
      handler: 'handleNodeToggle',
      setter: 'setExpanded',
      strictGetter: false,
      strictHandler: false,
      value: TEST_EXPANDED,
    },

    {
      defaultGetter: 'defaultSelected',
      defaultValue: DEFAULT_TREE_VIEW_SELECTED,
      getter: 'selected',
      setter: 'setSelected',
      strictGetter: false,
      value: TEST_SELECTED_ARRAY,
    },
    {
      args: [new TestChangeEvent(), TEST_SELECTED_ARRAY],
      callback: 'onNodeSelect',
      handler: 'handleNodeSelect',
      strict: false,
      states: {
        selected: [...TEST_SELECTED_ARRAY],
      },
    },
    {
      args: [new TestChangeEvent(), TEST_SELECTED_STRING],
      callback: 'onNodeSelect',
      handler: 'handleNodeSelect',
      strict: false,
      states: {
        selected: [TEST_SELECTED_STRING],
      },
    },
  ],
);
