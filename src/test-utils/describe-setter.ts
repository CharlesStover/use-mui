import { act, renderHook } from '@testing-library/react-hooks';
import type { Dispatch, SetStateAction } from 'react';
import validateDispatch from './validate-dispatch';
import validateRecord from './validate-record';

interface Options<P, S, T> {
  readonly getter: string & keyof S;
  readonly props?: Partial<P> | undefined;
  readonly setter: string & keyof S;
  readonly value: T;
}

export default function describeSetter<P, S, T>(
  useHook: (props?: Partial<P> | undefined) => S,
  { getter, props, setter, value }: Options<P, S, T>,
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
