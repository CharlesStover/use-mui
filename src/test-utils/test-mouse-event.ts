import type { AbstractView, MouseEvent as ReactMouseEvent } from 'react';
import validateTargetT from '../test-utils/validate-target-t';

const DEFAULT_BUTTON = 0;
const DEFAULT_BUTTONS = 0;
const DEFAULT_CLIENT_X = 0;
const DEFAULT_CLIENT_Y = 0;
const DEFAULT_DETAIL = 0;
const DEFAULT_EVENT_PHASE = 0;
const DEFAULT_MOVEMENT_X = 0;
const DEFAULT_MOVEMENT_Y = 0;
const DEFAULT_PAGE_X = 0;
const DEFAULT_PAGE_Y = 0;
const DEFAULT_SCREEN_X = 0;
const DEFAULT_SCREEN_Y = 0;

const DEFAULT_VIEW: AbstractView = {
  document,
  styleMedia: {
    type: '',
    matchMedium(): boolean {
      return true;
    },
  },
};

export default class TestMouseEvent<T = Element> implements ReactMouseEvent<T> {
  public altKey = false;

  public bubbles = true;

  public button: number = DEFAULT_BUTTON;

  public buttons: number = DEFAULT_BUTTONS;

  public clientX: number = DEFAULT_CLIENT_X;

  public clientY: number = DEFAULT_CLIENT_Y;

  public cancelable = true;

  public ctrlKey = false;

  public defaultPrevented = false;

  public detail: number = DEFAULT_DETAIL;

  public eventPhase: number = DEFAULT_EVENT_PHASE;

  public isTrusted = true;

  public metaKey = false;

  public movementX: number = DEFAULT_MOVEMENT_X;

  public movementY: number = DEFAULT_MOVEMENT_Y;

  public nativeEvent: MouseEvent = new MouseEvent('mouse');

  public pageX: number = DEFAULT_PAGE_X;

  public pageY: number = DEFAULT_PAGE_Y;

  public screenX: number = DEFAULT_SCREEN_X;

  public screenY: number = DEFAULT_SCREEN_Y;

  public shiftKey = false;

  public timeStamp: number = Date.now();

  public type = 'mouse';

  public view: AbstractView = DEFAULT_VIEW;

  private _isPropagationStopped = false;

  private readonly _target: EventTarget = new EventTarget();

  public get currentTarget(): EventTarget & T {
    return validateTargetT<T>(this._target);
  }

  public getModifierState(): boolean {
    return true;
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

  public get relatedTarget(): EventTarget {
    return this._target;
  }

  public stopPropagation(): void {
    this._isPropagationStopped = true;
  }

  public get target(): EventTarget {
    return this._target;
  }
}
