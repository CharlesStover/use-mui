import { act, renderHook } from '@testing-library/react-hooks';
import { useSlider } from '..';
import describeHook from '../test-utils/describe-hook';

const ONCE = 1;
const TEST_ACTIVE_THUMB = 99;
const TEST_EVENT: Event = new Event('change');
const TEST_VALUE = 21;

describeHook(
  useSlider,
  [
    {
      defaultGetter: 'defaultActiveThumb',
      defaultValue: undefined,
      getter: 'activeThumb',
      setter: 'setActiveThumb',
      value: TEST_ACTIVE_THUMB,
    },
    {
      defaultGetter: 'defaultValue',
      defaultValue: 0,
      getter: 'value',
      setter: 'setValue',
      value: TEST_VALUE,
    },
  ],
  (): void => {
    describe('handleChange', (): void => {
      it('should set `activeThumb`', (): void => {
        const { result } = renderHook(useSlider);

        act((): void => {
          result.current.handleChange(
            TEST_EVENT,
            TEST_VALUE,
            TEST_ACTIVE_THUMB,
          );
        });

        expect(result.current.activeThumb).toBe(TEST_ACTIVE_THUMB);
      });

      it('should set `value`', (): void => {
        const { result } = renderHook(useSlider);

        act((): void => {
          result.current.handleChange(
            TEST_EVENT,
            TEST_VALUE,
            TEST_ACTIVE_THUMB,
          );
        });

        expect(result.current.value).toBe(TEST_VALUE);
      });

      it('should call `onChange`', (): void => {
        const TEST_CHANGE_HANDLER = jest.fn();

        const { result } = renderHook(useSlider, {
          initialProps: {
            onChange: TEST_CHANGE_HANDLER,
          },
        });

        expect(TEST_CHANGE_HANDLER).not.toHaveBeenCalled();

        act((): void => {
          result.current.handleChange(
            TEST_EVENT,
            TEST_VALUE,
            TEST_ACTIVE_THUMB,
          );
        });

        expect(TEST_CHANGE_HANDLER).toHaveBeenCalledTimes(ONCE);

        expect(TEST_CHANGE_HANDLER).toHaveBeenLastCalledWith(
          TEST_EVENT,
          TEST_VALUE,
          TEST_ACTIVE_THUMB,
        );
      });
    });
  },
);
