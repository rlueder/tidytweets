// @flow

import { mutate } from "../store";
import chunk from "lodash/chunk";

import { fetchPaginatedFriendsInfo } from "./index";

/**
 * @async
 * @function getFriendsInfo
 * @see {@link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup}
 * @param {string} SCREEN_NAME
 * @param {Array<number>} USER_ID
 */

const getFriendsInfo = async (SCREEN_NAME: string, USER_ID: Array<number>) => {
  let PROMISES = [];
  for (const CHUNK of chunk(USER_ID, 50)) {
    PROMISES.push(fetchPaginatedFriendsInfo(SCREEN_NAME, CHUNK.join(",")));
  }
  try {
    const response = await Promise.all(PROMISES);
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
