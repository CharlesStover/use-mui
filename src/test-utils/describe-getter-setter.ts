import describeGetter from './describe-getter';
import describeSetter from './describe-setter';

interface Options {
  readonly defaultGetter: string;
  readonly defaultValue: unknown;
  readonly getter: string;
  readonly setter: string;
  readonly value: unknown;
}

export default function describeGetterSetter<P extends unknown[], S>(
  useHook: (...props: P) => S,
  { defaultGetter, defaultValue, getter, setter, value }: Options,
): void {
  describeGetter(useHook, { defaultGetter, defaultValue, getter, value });
  describeSetter(useHook, { getter, setter, value });
}
