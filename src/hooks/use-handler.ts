import { useCallback } from 'react';

export default function useHandler<A extends unknown[]>(
  callback: ((...args: A) => void) | undefined,
  update: (...args: A) => void,
): (...args: A) => void {
  return useCallback(
    (...args: A): void => {
      update(...args);
      if (typeof callback === 'function') {
        callback(...args);
      }
    },
    [callback, update],
  );
}
