import { act, renderHook } from '@testing-library/react-hooks';
import type { Dispatch, SetStateAction } from 'react';
import validateDispatch from './validate-dispatch';
import validateRecord from './validate-record';

export default function describeSetter(
  useHook: () => unknown,
  setter: string,
  getter: string,
  value: unknown,
): void {
  describe(setter, (): void => {
    it(`should set \`${getter}\``, (): void => {
      const { result } = renderHook(useHook);

      const state: Record<number | string | symbol, unknown> = validateRecord(
        result.current,
      );

      expect(state[getter]).not.toEqual(value);

      const setValue: Dispatch<SetStateAction<unknown>> = validateDispatch(
        state[setter],
      );

      act((): void => {
        setValue(value);
      });

      const newState: Record<number | string | symbol, unknown> =
        validateRecord(result.current);

      expect(newState[getter]).toBe(value);
    });
  });
}
