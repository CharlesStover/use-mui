import { act, renderHook } from '@testing-library/react-hooks';
import validateRecord from './validate-record';
import validateHandler from './validate-handler';

interface Options<P, S> {
  readonly args: readonly unknown[];
  readonly callback: string & keyof P;
  readonly handler: string & keyof S;
  readonly props?: Partial<P> | undefined;
  readonly states: Partial<S>;
  readonly strict?: boolean | undefined;
}

const ONCE = 1;

export default function describeHandler<P, S>(
  useHook: (props?: Partial<P> | undefined) => S,
  { args, callback, handler, props, states, strict = true }: Options<P, S>,
): void {
  describe(handler, (): void => {
    for (const [getter, value] of Object.entries(states)) {
      it(`should set \`${getter}\``, (): void => {
        const { result } = renderHook(useHook, {
          initialProps: props,
        });

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

        if (strict) {
          expect(newState[getter]).toBe(value);
        } else {
          expect(newState[getter]).toEqual(value);
        }
      });
    }

    it(`should call \`${callback}\``, (): void => {
      const TEST_CALLBACK = jest.fn();

      const { result } = renderHook(useHook, {
        initialProps: {
          ...props,
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
