import type { ChangeEvent } from 'react';
import type ReadonlyEvent from '../types/readonly-event';

export default interface ReadonlyChangeEvent<T = unknown>
  extends Readonly<
    Omit<ChangeEvent<T>, 'currentTarget' | 'nativeEvent' | 'target'>
  > {
  readonly currentTarget: Readonly<ChangeEvent<T>['currentTarget']>;
  readonly nativeEvent: Readonly<ReadonlyEvent>;
  readonly target: Readonly<ChangeEvent<T>['target']>;
}
