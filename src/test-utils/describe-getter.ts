import { renderHook } from '@testing-library/react-hooks';
import validateRecord from './validate-record';

interface Options<P, S, T> {
  readonly defaultGetter: string & keyof P;
  readonly defaultValue: T;
  readonly getter: string & keyof S;
  readonly props?: Partial<P> | undefined;
  readonly strict?: boolean | undefined;
  readonly value: T;
}

export default function describeGetter<P, S, T>(
  useHook: (props?: Partial<P> | undefined) => S,
  {
    defaultGetter,
    defaultValue,
    getter,
    props,
    strict = true,
    value,
  }: Options<P, S, T>,
): void {
  describe(getter, (): void => {
    it(`should default to ${JSON.stringify(defaultValue)}`, (): void => {
      const { result } = renderHook(useHook, {
        initialProps: props,
      });

      const state: Record<number | string | symbol, unknown> = validateRecord(
        result.current,
      );

      if (strict) {
        expect(state[getter]).toBe(defaultValue);
      } else {
        expect(state[getter]).toEqual(defaultValue);
      }
    });

    it(`should default to \`${defaultGetter}\``, (): void => {
      const { result } = renderHook(useHook, {
        initialProps: {
          ...props,
          [defaultGetter]: value,
        },
      });

      const state: Record<number | string | symbol, unknown> = validateRecord(
        result.current,
      );

      expect(state[getter]).not.toEqual(defaultValue);
      if (strict) {
        expect(state[getter]).toBe(value);
      } else {
        expect(state[getter]).toEqual(value);
      }
    });
  });
}
