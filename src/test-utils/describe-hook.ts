import describeGetter from './describe-getter';
import describeHandler from './describe-handler';
import describeSetter from './describe-setter';

interface GetterOptions {
  readonly defaultGetter: string;
  readonly defaultValue: unknown;
  readonly getter: string;
  readonly value: unknown;
}

interface HandlerOptions {
  readonly args: readonly unknown[];
  readonly callback: string;
  readonly handler: string;
}

interface NoHandlerOptions {
  readonly args?: undefined;
  readonly callback?: undefined;
  readonly handler?: undefined;
  readonly sideEffect?: undefined;
}

interface NoSetterOptions {
  readonly setter?: undefined;
}

interface SetterOptions {
  readonly setter: string;
}

export default function describeHook<P extends unknown[], S>(
  useHook: (...props: P) => S,
  states: readonly (GetterOptions &
    (HandlerOptions | NoHandlerOptions) &
    (NoSetterOptions | SetterOptions))[],
  tests?: () => void,
): void {
  describe(useHook.name, (): void => {
    for (const {
      args,
      callback,
      defaultGetter,
      defaultValue,
      getter,
      handler,
      setter,
      value,
    } of states) {
      describeGetter(useHook, { defaultValue, defaultGetter, getter, value });

      if (typeof setter === 'string') {
        describeSetter(useHook, { getter, setter, value });
      }

      if (
        Array.isArray(args) &&
        typeof callback === 'string' &&
        typeof handler === 'string'
      ) {
        describeHandler(useHook, {
          args,
          callback,
          defaultGetter,
          defaultValue,
          getter,
          handler,
          value,
        });
      }
    }

    if (typeof tests === 'function') {
      tests();
    }
  });
}
