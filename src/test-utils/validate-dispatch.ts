import type { Dispatch, SetStateAction } from 'react';
import isDispatch from './is-dispatch';

export default function validateDispatch(
  value: unknown,
): Dispatch<SetStateAction<unknown>> {
  if (!isDispatch(value)) {
    throw new Error(
      `Expected a dispatch function, but received: ${typeof value}`,
    );
  }
  return value;
}
