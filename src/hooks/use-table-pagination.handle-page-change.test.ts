import { act, renderHook } from '@testing-library/react-hooks';
import type { MouseEvent } from 'react';
import { useTablePagination } from '..';
import TestMouseEvent from '../test-utils/test-mouse-event';

const ONCE = 1;
const SECOND_PAGE = 1;

describe('useTablePagination', (): void => {
  describe('handlePageChange', (): void => {
    it('should change `page`', (): void => {
      const { result } = renderHook(useTablePagination);
      expect(result.current.page).not.toBe(SECOND_PAGE);
      act((): void => {
        result.current.handlePageChange(new TestMouseEvent(), SECOND_PAGE);
      });
      expect(result.current.page).toBe(SECOND_PAGE);
    });

    it('should fire the `onPageChange` callback', (): void => {
      const TEST_CHANGE_HANDLER = jest.fn();
      const TEST_EVENT: MouseEvent<HTMLButtonElement> = new TestMouseEvent();

      const { result } = renderHook(useTablePagination, {
        initialProps: {
          onPageChange: TEST_CHANGE_HANDLER,
        },
      });

      act((): void => {
        result.current.handlePageChange(TEST_EVENT, SECOND_PAGE);
      });

      expect(TEST_CHANGE_HANDLER).toHaveBeenCalledTimes(ONCE);
      expect(TEST_CHANGE_HANDLER).toHaveBeenLastCalledWith(
        TEST_EVENT,
        SECOND_PAGE,
      );
    });
  });
});
