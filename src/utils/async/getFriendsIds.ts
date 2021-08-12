import { mutate } from "store";

import { TWITTER_CLIENT } from "../../constants";

/**
 * @async
 * @function getFriendsIds
 * @summary Returns an array of string IDs limited to 5,000 items from Twitter, saves to app state under state.friends.ids
 * @see {@link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friends-ids}
 * @param {string} screenName
 * @param {number} [count]
 * @returns {Array<string>} data
 * @exports getFriendsIds
 */

const getFriendsIds = async (screenName: string, count: number = 5000) => {
  fetch(
    `${TWITTER_CLIENT}?endpoint=friends_ids&screen_name=${screenName}&count=${count}`
  )
    .then((response) => response.json())
    .then((data: { ids: Array<number> }) => {
      mutate(
        (draft: {
          friends: {
            ids: Array<number>;
          };
        }) => {
          draft.friends.ids = data.ids;
        }
      );
      return data;
    })
    .catch((error: Error) => {
      mutate((draft) => {
        draft.friends.error = error.message;
      });
    });
};

export default getFriendsIds;
