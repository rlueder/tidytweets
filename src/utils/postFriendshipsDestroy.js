// @flow

import { mutate } from "../store";

/**
 * @async
 * @function postFriendshipsDestroy
 * @see {@link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy}
 * @param {Object} ACCESS_TOKEN
 * @param {Array<number>} USER_ID
 */

const postFriendshipsDestroy = async (
  ACCESS_TOKEN: Object,
  USER_ID: string
) => {
  fetch(
    `/.netlify/functions/twitter-client?endpoint=friendships_destroy&access_key=${ACCESS_TOKEN.key}&access_secret=${ACCESS_TOKEN.secret}&user_id=${USER_ID}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // mutate((draft) => {
      //   draft.friends = {
      //     ids: data.ids,
      //   };
      // });
      // return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default postFriendshipsDestroy;
