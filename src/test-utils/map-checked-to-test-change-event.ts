import TestChangeEvent from './test-change-event';

export default function mapCheckedToTestChangeEvent(
  checked: boolean,
): TestChangeEvent<HTMLInputElement> {
  const input: HTMLInputElement = document.createElement('input');
  if (checked) {
    input.setAttribute('checked', '');
  }
  return new TestChangeEvent(input);
}
