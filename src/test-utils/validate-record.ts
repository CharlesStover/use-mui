import isRecord from './is-record';

export default function validateRecord(
  value: unknown,
): Record<number | string | symbol, unknown> {
  if (!isRecord(value)) {
    throw new Error(`Expected a record, but received: ${typeof value}`);
  }
  return value;
}
