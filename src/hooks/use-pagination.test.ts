import { act, renderHook } from '@testing-library/react-hooks';
import type { ChangeEvent } from 'react';
import { usePagination } from '..';
import describeSetter from '../test-utils/describe-setter';
import TestChangeEvent from '../test-utils/test-change-event';

const FIRST_PAGE = 0;
const ONCE = 1;
const SECOND_PAGE = 1;

describe('usePagination', (): void => {
  describe('handleChange', (): void => {
    it('should change `page`', (): void => {
      const { result } = renderHook(usePagination);
      expect(result.current.page).not.toBe(SECOND_PAGE);
      act((): void => {
        result.current.handleChange(new TestChangeEvent(), SECOND_PAGE);
      });
      expect(result.current.page).toBe(SECOND_PAGE);
    });

    it('should fire the `onChange` callback', (): void => {
      const TEST_CHANGE_HANDLER = jest.fn();
      const TEST_EVENT: ChangeEvent = new TestChangeEvent();

      const { result } = renderHook(usePagination, {
        initialProps: {
          onChange: TEST_CHANGE_HANDLER,
        },
      });

      act((): void => {
        result.current.handleChange(TEST_EVENT, SECOND_PAGE);
      });

      expect(TEST_CHANGE_HANDLER).toHaveBeenCalledTimes(ONCE);
      expect(TEST_CHANGE_HANDLER).toHaveBeenLastCalledWith(
        TEST_EVENT,
        SECOND_PAGE,
      );
    });
  });

  describe('page', (): void => {
    it('should default to 0', (): void => {
      const { result } = renderHook(usePagination);
      expect(result.current.page).toBe(FIRST_PAGE);
    });

    it('should default to `defaultPage`', (): void => {
      const { result } = renderHook(usePagination, {
        initialProps: {
          defaultPage: SECOND_PAGE,
        },
      });
      expect(result.current.page).toBe(SECOND_PAGE);
    });
  });

  describeSetter(usePagination, 'setPage', 'page', SECOND_PAGE);
});
