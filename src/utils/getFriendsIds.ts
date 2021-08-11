import { mutate } from "store";

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
    `/.netlify/functions/twitter-client?endpoint=friends_ids&screen_name=${screenName}&count=${count}`
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
    .catch((error: string) => {
      mutate((draft) => {
        draft.friends.error = error;
        draft.friends.hasError = true;
      });
    });
};

export default getFriendsIds;
