export default function isTargetT<T>(
  _target: Readonly<EventTarget>,
): _target is EventTarget & T {
  return true;
}
