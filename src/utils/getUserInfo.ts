import { mutate } from "store";

/**
 * @async
 * @function getUserInfo
 * @summary Returns information on logged-in user saving it to state.user
 * @see {@link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-show}
 * @param {string} screenName
 * @returns {Object} data
 * @exports getUserInfo
 */

const getUserInfo = async (screenName: string) => {
  fetch(
    `/.netlify/functions/twitter-client?endpoint=users_show&screen_name=${screenName}`
  )
    .then((response) => response.json())
    .then((data: {}) => {
      mutate((draft: { user: {} }) => {
        draft.user = data;
      });
      return data;
    });
};

export default getUserInfo;
