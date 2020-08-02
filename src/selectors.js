// @flow

import { createSelector } from "store";

/**
 * Optimized Selectors
 * @see {@link https://github.com/aweary/react-copy-write#optimized-selectors}
 */

type State = {
  access: {},
  friends: { data: Array<Object>, ids: Array<number> },
  request: {},
  user: {
    data: Object,
  },
};

export const selectAccess = createSelector((state: State) => state.access);
export const selectFriends = createSelector((state: State) => state.friends);
export const selectRequest = createSelector((state: State) => state.request);
export const selectUser = createSelector((state: State) => state.user);
