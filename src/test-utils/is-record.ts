export default function isRecord(
  value: unknown,
): value is Record<number | string | symbol, unknown> {
  return typeof value === 'object' && value !== null;
}
