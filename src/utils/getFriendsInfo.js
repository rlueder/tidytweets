// @flow

import { mutate } from "../store";
import chunk from "lodash/chunk";

/**
 * @async
 * @function getFriendsInfo
 * @see {@link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup}
 * @param {string} SCREEN_NAME
 * @param {Array<number>} USER_ID
 */

const getFriendsInfo = async (SCREEN_NAME: string, USER_ID: Array<number>) => {
  //
  const fetchPaginatedFriendsInfo = async (
    SCREEN_NAME: string,
    USER_ID: string
  ): Object => {
    const response = await fetch(
      `/.netlify/functions/twitter-client?endpoint=users_lookup&screen_name=${SCREEN_NAME}&user_id=${CHUNKS[0]}`
    );
    if (!response.ok) {
      Promise.reject(new Error("fail")).then(
        () => null,
        () => null
      );
      throw Error(response.status.toString());
    }
    return response.json();
  };

  const CHUNKS = chunk(USER_ID, 50);
  let ALL_REQUESTS = [];
  for (const CHUNK of CHUNKS) {
    ALL_REQUESTS.push(fetchPaginatedFriendsInfo(CHUNK.join(",")));
  }

  try {
    const response = await Promise.all(ALL_REQUESTS);
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
