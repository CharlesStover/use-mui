import { act, renderHook } from '@testing-library/react-hooks';
import validateRecord from './validate-record';
import validateHandler from './validate-handler';

interface Options {
  readonly args: readonly unknown[];
  readonly callback: string;
  readonly defaultGetter: string;
  readonly defaultValue: unknown;
  readonly getter: string;
  readonly handler: string;
  readonly value: unknown;
}

const ONCE = 1;

export default function describeHandler(
  useHook: () => unknown,
  {
    args,
    callback,
    defaultGetter,
    defaultValue,
    getter,
    handler,
    value,
  }: Options,
): void {
  describe(handler, (): void => {
    it(`should set \`${getter}\``, (): void => {
      const initialProps: Record<string, unknown> = {};
      if (typeof defaultGetter === 'string') {
        initialProps[defaultGetter] = defaultValue;
      }

      const { result } = renderHook(useHook, { initialProps });

      const state: Record<number | string | symbol, unknown> = validateRecord(
        result.current,
      );

      expect(state[getter]).not.toEqual(value);

      const handle = validateHandler(state[handler]);
      act((): void => {
        handle(...args);
      });

      const newState: Record<number | string | symbol, unknown> =
        validateRecord(result.current);

      expect(newState[getter]).toBe(value);
    });

    it(`should call \`${callback}\``, (): void => {
      const TEST_CALLBACK = jest.fn();

      const { result } = renderHook(useHook, {
        initialProps: {
          [callback]: TEST_CALLBACK,
        },
      });

      expect(TEST_CALLBACK).not.toHaveBeenCalled();

      const state: Record<number | string | symbol, unknown> = validateRecord(
        result.current,
      );

      const handle = validateHandler(state[handler]);
      act((): void => {
        handle(...args);
      });

      expect(TEST_CALLBACK).toHaveBeenCalledTimes(ONCE);
      expect(TEST_CALLBACK).toHaveBeenLastCalledWith(...args);
    });
  });
}
