import { mutate } from "store";

import { TWITTER_CLIENT } from "../../constants";
import type { Friend } from "definitions";

/**
 * @async
 * @name postFriendshipsDestroy
 * @type {Function}
 * @summary Unfollows the user specified by USER_ID
 * @see {@link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy}
 * @param {Object} access
 * @param {string} userId
 */

const postFriendshipsDestroy = async (
  access: {
    key: string;
    secret: string;
  },
  userId: string
) => {
  fetch(
    `${TWITTER_CLIENT}?endpoint=friendships_destroy&access_key=${access.key}&access_secret=${access.secret}&user_id=${userId}`
  )
    .then((response) => response.json())
    .then((data: Friend) => {
      // remove id that received success response
      mutate((draft) => {
        draft.friends.data = draft.friends.data.filter(
          (item: Friend) => item.id !== data.id
        );
      });
      return data;
    })
    .catch((error: Error) => {
      console.log(error);
    });
};

export default postFriendshipsDestroy;
