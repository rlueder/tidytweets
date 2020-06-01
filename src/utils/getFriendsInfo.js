// @flow

import { mutate } from "../store";
import chunk from "lodash/chunk";

import { fetchPaginatedFriendsInfo } from "./index";

/**
 * @async
 * @function getFriendsInfo
 * @summary Fires a promise for chunks of 50 ids from USER_IDS writing data to state.friends.data
 * @see {@link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup}
 * @param {string} SCREEN_NAME
 * @param {Array<number>} USER_IDS
 */

const getFriendsInfo = async (SCREEN_NAME: string, USER_IDS: Array<number>) => {
  let promises = [];
  for (const CHUNK of chunk(USER_IDS, 50)) {
    promises.push(fetchPaginatedFriendsInfo(SCREEN_NAME, CHUNK.join(",")));
  }
  try {
    const response = await Promise.all(promises);
    if (response.length) {
      mutate((draft) => {
        draft.friends = {
          data: response.flat(),
          loading: false,
        };
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default getFriendsInfo;
