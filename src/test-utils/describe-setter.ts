import { act, renderHook } from '@testing-library/react-hooks';
import type { Dispatch, SetStateAction } from 'react';
import validateDispatch from './validate-dispatch';
import validateRecord from './validate-record';

interface Options {
  readonly getter: string;
  readonly props?: Record<string, unknown> | undefined;
  readonly setter: string;
  readonly value: unknown;
}

export default function describeSetter(
  useHook: () => unknown,
  { getter, props, setter, value }: Options,
): void {
  describe(setter, (): void => {
    it(`should set \`${getter}\``, (): void => {
      const { result } = renderHook(useHook, {
        initialProps: props,
      });

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
