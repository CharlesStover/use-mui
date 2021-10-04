import type { ChangeEvent } from 'react';
import validateTargetT from '../test-utils/validate-target-t';

const DEFAULT_EVENT_PHASE = 0;

export default class TestChangeEvent<T = unknown> implements ChangeEvent<T> {
  public bubbles = true;

  public cancelable = true;

  public defaultPrevented = false;

  public eventPhase = DEFAULT_EVENT_PHASE;

  public isTrusted = true;

  public nativeEvent: Event = new Event('change');

  public timeStamp: number = Date.now();

  public type = 'change';

  private _isPropagationStopped = false;

  private readonly _target: EventTarget;

  public constructor(target: Readonly<EventTarget> = new EventTarget()) {
    this._target = target;
  }

  public get currentTarget(): EventTarget & T {
    return validateTargetT(this._target);
  }

  public isDefaultPrevented(): boolean {
    return this.defaultPrevented;
  }

  public isPropagationStopped(): boolean {
    return this._isPropagationStopped;
  }

  public persist(): void {
    return;
  }

  public preventDefault(): void {
    this.defaultPrevented = true;
  }

  public stopImmediatePropagation(): void {
    this._isPropagationStopped = true;
  }

  public stopPropagation(): void {
    this._isPropagationStopped = true;
  }

  public get target(): EventTarget & T {
    return validateTargetT<T>(this._target);
  }
}
