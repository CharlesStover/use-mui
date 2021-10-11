import { act, renderHook } from '@testing-library/react-hooks';
import type { SyntheticEvent } from 'react';
import { useSnackbar } from '..';
import describeHook from '../test-utils/describe-hook';
import TestChangeEvent from '../test-utils/test-change-event';

const ONCE = 1;

describeHook(
  useSnackbar,
  [
    {
      defaultGetter: 'defaultOpen',
      defaultValue: false,
      getter: 'open',
      setter: 'setOpen',
      value: true,
    },
    {
      defaultGetter: 'defaultReason',
      defaultValue: undefined,
      getter: 'reason',
      setter: 'setReason',
      value: 'test reason',
    },
  ],
  (): void => {
    describe('handleClose', (): void => {
      it('should set `open` to false', (): void => {
        const { result } = renderHook(useSnackbar, {
          initialProps: { defaultOpen: true },
        });

        act((): void => {
          result.current.handleClose(new TestChangeEvent(), '');
        });

        expect(result.current.open).toBe(false);
      });

      it('should set `reason`', (): void => {
        const TEST_REASON = 'test reason';

        const { result } = renderHook(useSnackbar);

        act((): void => {
          result.current.handleClose(new TestChangeEvent(), TEST_REASON);
        });

        expect(result.current.reason).toBe(TEST_REASON);
      });

      it('should call `onClose`', (): void => {
        const TEST_CALLBACK = jest.fn();
        const TEST_EVENT: SyntheticEvent = new TestChangeEvent();
        const TEST_REASON = 'test reason';

        const { result } = renderHook(useSnackbar, {
          initialProps: {
            onClose: TEST_CALLBACK,
          },
        });

        expect(TEST_CALLBACK).not.toHaveBeenCalled();

        act((): void => {
          result.current.handleClose(TEST_EVENT, TEST_REASON);
        });

        expect(TEST_CALLBACK).toHaveBeenCalledTimes(ONCE);
        expect(TEST_CALLBACK).toHaveBeenLastCalledWith(TEST_EVENT, TEST_REASON);
      });
    });
  },
);
