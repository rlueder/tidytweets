// @ts-nocheck

import { createSelector } from "store";

import type { State } from "definitions";

/**
 * Optimized Selectors
 * @see {@link https://github.com/aweary/react-copy-write#optimized-selectors}
 */

export const selectAccess = createSelector((state: State) => state.access);
export const selectFriends = createSelector((state: State) => state.friends);
export const selectRequest = createSelector((state: State) => state.request);
export const selectUser = createSelector((state: State) => state.user);
