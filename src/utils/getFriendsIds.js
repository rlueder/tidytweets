// @flow

import { mutate } from "../store";

/**
 * @async
 * @function getFriendsIds
 * @see {@link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friends-ids}
 * @param {string} SCREEN_NAME
 * @param {number} [COUNT]
 */

const getFriendsIds = async (SCREEN_NAME: string, COUNT?: Number = 5000) => {
  fetch(
    `/.netlify/functions/twitter-client?endpoint=friends_ids&screen_name=${SCREEN_NAME}&count=${COUNT}`
  )
    .then((response) => response.json())
    .then((data) => {
      mutate((draft) => {
        draft.friends = {
          ids: data.ids,
        };
      });
      return data;
    });
};

export default getFriendsIds;
