import { renderHook } from '@testing-library/react-hooks';
import validateRecord from './validate-record';

interface Options {
  readonly defaultGetter: string;
  readonly defaultValue: unknown;
  readonly getter: string;
  readonly props?: Record<string, unknown> | undefined;
  readonly value: unknown;
}

export default function describeGetter(
  useHook: () => unknown,
  { defaultGetter, defaultValue, getter, props, value }: Options,
): void {
  describe(getter, (): void => {
    it(`should default to ${JSON.stringify(defaultValue)}`, (): void => {
      const { result } = renderHook(useHook, {
        initialProps: props,
      });

      const state: Record<number | string | symbol, unknown> = validateRecord(
        result.current,
      );

      expect(state[getter]).toBe(defaultValue);
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
      expect(state[getter]).toBe(value);
    });
  });
}
