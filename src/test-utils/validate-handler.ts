import isHandler from './is-handler';

export default function validateHandler<A extends unknown[]>(
  value: unknown,
): (...args: A) => unknown {
  if (!isHandler(value)) {
    throw new Error(
      `Expected a handler function, but received: ${typeof value}`,
    );
  }
  return value;
}
