export default interface ReadonlyEvent
  extends Omit<Event, 'currentTarget' | 'srcElement' | 'target'> {
  readonly currentTarget: Readonly<Event['currentTarget']>;
  /** @deprecated */
  readonly srcElement: Readonly<Event['srcElement']>;
  readonly target: Readonly<Event['target']>;
}
