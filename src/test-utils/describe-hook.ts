import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import type { ReactElement } from 'react';
import describeGetter from './describe-getter';
import describeHandler from './describe-handler';
import describeSetter from './describe-setter';

interface HandlerOptions<P, S> {
  readonly args: readonly unknown[];
  readonly callback: string & keyof P;
  readonly handler: string & keyof S;
  readonly props?: Partial<P> | undefined;
  readonly states: Partial<S>;
}

interface StateOptions<P, S> {
  readonly defaultGetter: string & keyof P;
  readonly defaultValue: unknown;
  readonly getter: string & keyof S;
  readonly props?: Partial<P> | undefined;
  readonly setter: string & keyof S;
  readonly value: unknown;
}

interface StateHandlerOptions<P, S> {
  readonly args: readonly unknown[];
  readonly callback: string & keyof P;
  readonly handler: string & keyof S;
}

interface NoStateHandlerOptions {
  readonly args?: undefined;
  readonly callback?: undefined;
  readonly handler?: undefined;
}

const filterOptionsByHandlerOptions = <P, S>(
  options: unknown,
): options is HandlerOptions<P, S> =>
  Object.prototype.hasOwnProperty.call(options, 'states');

export default function describeHook<P, S>(
  useHook: (props?: Partial<P> | undefined) => S,
  getElement: (state: S) => ReactElement,
  tests: readonly (
    | HandlerOptions<P, S>
    | (StateOptions<P, S> & (NoStateHandlerOptions | StateHandlerOptions<P, S>))
  )[],
): void {
  describe(useHook.name, (): void => {
    it('should return component props', (): void => {
      const { result } = renderHook(useHook);
      render(getElement(result.current));
    });

    for (const options of tests) {
      // Test suite for an event handler that manges multiple states.
      if (filterOptionsByHandlerOptions<P, S>(options)) {
        const { args, callback, handler, props, states } = options;

        describeHandler(useHook, {
          args,
          callback,
          handler,
          props,
          states,
        });

        continue;
      }

      // Test suite for a state getter and setter.
      const {
        args,
        callback,
        defaultGetter,
        defaultValue,
        getter,
        handler,
        props,
        setter,
        value,
      } = options;

      describeGetter(useHook, {
        defaultGetter,
        defaultValue,
        getter,
        props,
        value,
      });

      describeSetter(useHook, { getter, setter, props, value });

      // Test suite for an event handler that manages a single getter and
      //   setter.
      if (
        Array.isArray(args) &&
        typeof callback === 'string' &&
        typeof handler === 'string'
      ) {
        // TypeScript cannot infer that S[typeof getter] = T.
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const states: Partial<S> = {
          [getter]: value,
        } as unknown as Partial<S>;
        describeHandler(useHook, {
          args,
          callback,
          handler,
          states,
        });
      }
    }
  });
}
