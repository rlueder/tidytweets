import createState from "react-copy-write";

/**
 * @function createState
 * @summary An immutable React state management library with a simple mutable API, memoized selectors, and structural sharing.
 * @see {@link https://github.com/aweary/react-copy-write#documentation}
 */

export const { Consumer, Provider, createSelector, mutate } = createState({
  access: {},
  friends: {
    data: [],
    ids: [],
    error: "",
  },
  request: {},
  user: {},
});
