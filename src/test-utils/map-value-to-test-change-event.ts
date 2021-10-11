import TestChangeEvent from './test-change-event';

export default function mapValueToTestChangeEvent(
  value: string,
): TestChangeEvent<HTMLInputElement> {
  const input: HTMLInputElement = document.createElement('input');
  input.setAttribute('value', value);
  return new TestChangeEvent(input);
}
