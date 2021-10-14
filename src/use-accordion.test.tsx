import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import type { ReactElement } from 'react';
import type { AccordionState } from '.';
import { useAccordion } from '.';
import describeHook from './test-utils/describe-hook';
import TestChangeEvent from './test-utils/test-change-event';

describeHook(
  useAccordion,
  ({ expanded, handleChange }: AccordionState): ReactElement => (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary>Hello world</AccordionSummary>
    </Accordion>
  ),
  [
    {
      args: [new TestChangeEvent(), true],
      callback: 'onChange',
      defaultGetter: 'defaultExpanded',
      defaultValue: false,
      getter: 'expanded',
      handler: 'handleChange',
      setter: 'setExpanded',
      value: true,
    },
  ],
);
