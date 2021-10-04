import isTargetT from '../test-utils/is-target-t';

export default function validateTargetT<T>(
  target: Readonly<EventTarget>,
): EventTarget & T {
  if (!isTargetT<T>(target)) {
    throw new Error('Expected `isTargetT` to return true.');
  }
  return target;
}
