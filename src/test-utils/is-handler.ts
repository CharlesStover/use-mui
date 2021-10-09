export default function isHandler<A extends unknown[]>(
  value: unknown,
): value is (...args: A) => unknown {
  return typeof value === 'function';
}
