// @flow

import { mutate } from "../store";

/**
 * @async
 * @function postFriendshipsDestroy
 * @see {@link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy}
 * @param {Array<number>} USER_ID
 */

const postFriendshipsDestroy = async (USER_ID: Array<number>) => {
  fetch(
    `/.netlify/functions/twitter-client?endpoint=friendships_destroy&user_id=${USER_ID}`
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
