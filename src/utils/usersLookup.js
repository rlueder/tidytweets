// @flow

/**
 * @async
 * @function usersLookup
 * @see {@link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup}
 * @param {string} SCREEN_NAME
 * @param {number} USER_ID
 * @returns {Object} response
 */

const usersLookup = async (SCREEN_NAME: string, USER_ID: number): Object => {
  const response = await fetch(
    `/.netlify/functions/twitter-client?endpoint=users_lookup&screen_name=${SCREEN_NAME}&user_id=${USER_ID}`
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
