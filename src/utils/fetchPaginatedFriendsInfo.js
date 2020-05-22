// @flow

/**
 * @function fetchPaginatedFriendsInfo
 * @param {string} SCREEN_NAME
 * @param {string} USER_ID
 * @returns {Object} response
 */

const fetchPaginatedFriendsInfo = async (
  SCREEN_NAME: string,
  USER_ID: string
): Object => {
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

export default fetchPaginatedFriendsInfo;
