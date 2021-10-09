import type { Dispatch, SetStateAction } from 'react';

export default function isDispatch(
  value: unknown,
): value is Dispatch<SetStateAction<unknown>> {
  return typeof value === 'function';
}
