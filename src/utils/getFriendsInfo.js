// @flow
import chunk from "lodash/chunk";

import { mutate } from "store";
import { usersLookup } from "utils";

/**
 * @async
 * @function getFriendsInfo
 * @summary Fires a promise for chunks of 50 ids from USER_IDS writing data to state.friends.data
 * @see {@link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup}
 * @param {string} SCREEN_NAME
 * @param {Array<number>} USER_IDS
 * @returns {Object} response
 * @exports getFriendsInfo
 */

const getFriendsInfo = async (SCREEN_NAME: string, USER_IDS: Array<number>) => {
  let promises = [];
  for (const CHUNK of chunk(USER_IDS, 50)) {
    promises.push(usersLookup(SCREEN_NAME, CHUNK.join(",")));
  }
  try {
    const response = await Promise.all(promises);
    if (response.length) {
      mutate((draft) => {
        draft.friends.data = response.flat();
      });
    }
    return response;
  } catch (error) {
    mutate((draft) => {
      draft.friends.error = error;
      draft.friends.hasError = true;
    });
  }
};

export default getFriendsInfo;
