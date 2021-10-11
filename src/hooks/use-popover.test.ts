import { act, renderHook } from '@testing-library/react-hooks';
import type { SyntheticEvent } from 'react';
import { usePopover } from '..';
import describeGetter from '../test-utils/describe-getter';
import describeSetter from '../test-utils/describe-setter';
import TestChangeEvent from '../test-utils/test-change-event';

const ONCE = 1;

describe('usePopover', (): void => {
  describeGetter(usePopover, 'open', false, 'defaultOpen', true);
  describeGetter(usePopover, 'reason', undefined, 'defaultReason', 'test');
  describeSetter(usePopover, 'setOpen', 'open', true);
  describeSetter(usePopover, 'setReason', 'reason', 'test');

  describe('handleClose', (): void => {
    it('should set `open` to false', (): void => {
      const { result } = renderHook(usePopover, {
        initialProps: { defaultOpen: true },
      });

      act((): void => {
        result.current.handleClose(new TestChangeEvent(), '');
      });

      expect(result.current.open).toBe(false);
    });

    it('should set `reason`', (): void => {
      const TEST_REASON = 'test reason';

      const { result } = renderHook(usePopover);

      act((): void => {
        result.current.handleClose(new TestChangeEvent(), TEST_REASON);
      });

      expect(result.current.reason).toBe(TEST_REASON);
    });

    it('should call `onClose`', (): void => {
      const TEST_CALLBACK = jest.fn();
      const TEST_EVENT: SyntheticEvent = new TestChangeEvent();
      const TEST_REASON = 'test reason';

      const { result } = renderHook(usePopover, {
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
});
