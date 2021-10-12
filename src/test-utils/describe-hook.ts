import describeGetter from './describe-getter';
import describeHandler from './describe-handler';
import describeSetter from './describe-setter';

interface HandlerOptions {
  readonly args: readonly unknown[];
  readonly callback: string;
  readonly handler: string;
  readonly props?: Record<string, unknown>;
  readonly states: Record<string, unknown>;
}

interface StateOptions {
  readonly defaultGetter: string;
  readonly defaultValue: unknown;
  readonly getter: string;
  readonly props?: Record<string, unknown>;
  readonly setter: string;
  readonly value: unknown;
}

interface StateHandlerOptions {
  readonly args: readonly unknown[];
  readonly callback: string;
  readonly handler: string;
}

interface NoStateHandlerOptions {
  readonly args?: undefined;
  readonly callback?: undefined;
  readonly handler?: undefined;
}

const filterOptionsByHandlerOptions = (
  options: unknown,
): options is HandlerOptions =>
  Object.prototype.hasOwnProperty.call(options, 'states');

export default function describeHook<P extends unknown[], S>(
  useHook: (...props: P) => S,
  tests: readonly (
    | HandlerOptions
    | (StateOptions & (NoStateHandlerOptions | StateHandlerOptions))
  )[],
): void {
  describe(useHook.name, (): void => {
    for (const options of tests) {
      // Test suite for an event handler that manges multiple states.
      if (filterOptionsByHandlerOptions(options)) {
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
        describeHandler(useHook, {
          args,
          callback,
          handler,
          states: {
            [getter]: value,
          },
        });
      }
    }
  });
}
