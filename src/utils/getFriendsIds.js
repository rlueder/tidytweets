import { mutate } from "store";

/**
 * @async
 * @function getFriendsIds
 * @summary Returns an array of string IDs limited to 5,000 items from Twitter, saves to app state under state.friends.ids
 * @see {@link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friends-ids}
 * @param {string} SCREEN_NAME
 * @param {number} [COUNT]
 * @returns {Array<string>} data
 * @exports getFriendsIds
 */

const getFriendsIds = async (SCREEN_NAME: string, COUNT?: number = 5000) => {
  fetch(
    `/.netlify/functions/twitter-client?endpoint=friends_ids&screen_name=${SCREEN_NAME}&count=${COUNT}`
  )
    .then((response) => response.json())
    .then((data: { ids: Array<number> }) => {
      mutate(
        (draft: {
          friends: {
            ids: Array<number>,
          },
        }) => {
          draft.friends.ids = data.ids;
        }
      );
      return data;
    })
    .catch((error: string) => {
      mutate(
        (draft: {
          friends: {
            error: string,
            hasError: boolean,
          },
        }) => {
          draft.friends.error = error;
          draft.friends.hasError = true;
        }
      );
    });
};

export default getFriendsIds;
