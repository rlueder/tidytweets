import { mutate } from "store";
import { TWITTER_CLIENT } from "../../constants";

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
  fetch(`${TWITTER_CLIENT}?endpoint=users_show&screen_name=${screenName}`)
    .then((response) => response.json())
    .then((data: {}) => {
      mutate((draft: { user: Object }) => {
        draft.user = data;
      });
      return data;
    });
};

export default getUserInfo;
