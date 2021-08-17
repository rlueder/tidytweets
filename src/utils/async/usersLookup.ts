import { TWITTER_CLIENT } from "../../constants";

/**
 * @async
 * @name usersLookup
 * @type {Function}
 * @see {@link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup}
 * @param {string} screenName
 * @param {number} userId
 * @returns {Object} response
 */

const usersLookup = async (
  screenName: string,
  userId: number
): Promise<Object> => {
  const response = await fetch(
    `${TWITTER_CLIENT}?endpoint=users_lookup&screen_name=${screenName}&user_id=${userId}`
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

export default usersLookup;
