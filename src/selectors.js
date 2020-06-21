// @flow

import { createSelector } from "store";

/**
 * Optimized Selectors
 * @see {@link https://github.com/aweary/react-copy-write#optimized-selectors}
 */

export const selectAccess = createSelector((state) => state.access);
export const selectFriends = createSelector((state) => state.friends);
export const selectRequest = createSelector((state) => state.request);
export const selectUser = createSelector((state) => state.user);
