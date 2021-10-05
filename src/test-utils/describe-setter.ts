import { act, renderHook } from '@testing-library/react-hooks';
import type { Dispatch, SetStateAction } from 'react';

const isDispatch = (
  value: unknown,
): value is Dispatch<SetStateAction<unknown>> => typeof value === 'function';

const isRecord = (
  value: unknown,
): value is Record<number | string | symbol, unknown> =>
  typeof value === 'object' && value !== null;

export default function describeSetter(
  useHook: () => unknown,
  setter: string,
  getter: string,
  value: unknown,
): void {
  describe(setter, (): void => {
    it(`should set \`${getter}\``, (): void => {
      const { result } = renderHook(useHook);

      const state: unknown = result.current;
      if (!isRecord(state)) {
        throw new Error('Expected state to be an object.');
      }

      expect(state[getter]).not.toBe(value);

      const setValue: unknown = state[setter];
      if (!isDispatch(setValue)) {
        throw new Error(`Property "${setter}" is not a dispatch function.`);
      }

      act((): void => {
        setValue(value);
      });

      const newState: unknown = result.current;
      if (!isRecord(newState)) {
        throw new Error('Expected new state to be an object.');
      }

      expect(newState[getter]).toBe(value);
    });
  });
}
