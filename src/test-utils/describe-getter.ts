import { renderHook } from '@testing-library/react-hooks';
import validateRecord from './validate-record';

export default function describeGetter(
  useHook: () => unknown,
  getter: string,
  defaultValue: unknown,
  defaultGetter: string,
  value: unknown,
): void {
  describe(getter, (): void => {
    it(`should default to ${JSON.stringify(defaultValue)}`, (): void => {
      const { result } = renderHook(useHook);

      const state: Record<number | string | symbol, unknown> = validateRecord(
        result.current,
      );

      expect(state[getter]).toBe(defaultValue);
    });

    it(`should default to \`${defaultGetter}\``, (): void => {
      const { result } = renderHook(useHook, {
        initialProps: {
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
