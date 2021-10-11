import describeGetter from './describe-getter';
import describeHandler from './describe-handler';
import describeSetter from './describe-setter';

interface GetterOptions {
  readonly defaultGetter: string;
  readonly defaultValue: unknown;
  readonly getter: string;
  readonly value: unknown;
}

interface HandlerOptions<S> {
  readonly args: readonly unknown[];
  readonly callback: string;
  readonly handler: string;
  readonly sideEffect?: (state: S) => void;
}

interface SetterOptions {
  readonly setter: string;
}

export default function describeHook<P extends unknown[], S>(
  useHook: (...props: P) => S,
  states: readonly (GetterOptions &
    (HandlerOptions<S> | never) &
    (SetterOptions | never))[],
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
      describeGetter(useHook, getter, defaultValue, defaultGetter, value);
      if (typeof setter === 'string') {
        describeSetter(useHook, setter, getter, value);
      }
      if (typeof handler === 'string') {
        describeHandler(useHook, handler, args, getter, value, callback);
      }
    }
    if (typeof tests === 'function') {
      tests();
    }
  });
}
