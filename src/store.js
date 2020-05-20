// @flow

import createState from "react-copy-write";

/**
 * @function createState
 * @summary An immutable React state management library with a simple mutable API, memoized selectors, and structural sharing.
 * @see {@link https://github.com/aweary/react-copy-write#documentation }
 */

export const { Provider, Consumer, createSelector, mutate } = createState({
  access: {},
  request: {},
});
