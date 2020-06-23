// @flow

import { mutate } from "store";

/**
 * @async
 * @function postFriendshipsDestroy
 * @summary Unfollows the user specified by USER_ID
 * @see {@link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy}
 * @param {Object} ACCESS_TOKEN
 * @param {number} USER_ID
 * @exports postFriendshipsDestroy
 */

const postFriendshipsDestroy = async (
  ACCESS_TOKEN: Object,
  USER_ID: number
) => {
  fetch(
    `/.netlify/functions/twitter-client?endpoint=friendships_destroy&access_key=${ACCESS_TOKEN.key}&access_secret=${ACCESS_TOKEN.secret}&user_id=${USER_ID}`
  )
    .then((response) => response.json())
    .then((data) => {
      // remove id that received success response
      mutate((draft) => {
        draft.friends.data = draft.friends.data.filter(
          (item) => item.id !== data.id
        );
      });
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default postFriendshipsDestroy;
