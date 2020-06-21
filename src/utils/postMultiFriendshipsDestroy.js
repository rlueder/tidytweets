// @flow

import { mutate } from "store";

/**
 * @async
 * @function postMultiFriendshipsDestroy
 * @summary Unfollows multiple users from USER_IDS
 * @see {@link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy}
 * @param {Object} ACCESS_TOKEN
 * @param {Array<number>} USER_IDS
 */

const friendshipsDestroy = async (
  ACCESS_TOKEN: Object,
  USER_ID: number
): Object => {
  const response = await fetch(
    `/.netlify/functions/twitter-client?endpoint=friendships_destroy&access_key=${ACCESS_TOKEN.key}&access_secret=${ACCESS_TOKEN.secret}&user_id=${USER_ID}`
  );
  if (!response.ok) {
    Promise.reject(new Error("fail")).then(
      () => null, // not called
      (error) => console.log(error)
    );
    throw Error(response.status.toString());
  }
  return response.json();
};

const postMultiFriendshipsDestroy = async (
  ACCESS_TOKEN: Object,
  USER_IDS: Array<number>
) => {
  let promises = [];
  for (const ID of USER_IDS) {
    promises.push(friendshipsDestroy(ACCESS_TOKEN, ID));
  }
  try {
    const response = await Promise.all(promises);
    if (response.length) {
      for (const ITEM of response) {
        mutate((draft) => {
          draft.friends.data = draft.friends.data.filter(
            (item) => item.id !== ITEM.id
          );
        });
      }
    }
  } catch (error) {
    mutate((draft) => {
      draft.friends.error = error;
      draft.friends.hasError = true;
    });
  }
};

export default postMultiFriendshipsDestroy;
