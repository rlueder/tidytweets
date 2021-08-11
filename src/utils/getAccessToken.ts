import localforage from "localforage";

import { NETLIFY_FUNCTION } from "../constants";
import { mutate } from "store";
import { getUserInfo, getFriendsIds } from "utils";

/**
 * @async
 * @function getAccessToken
 * @summary Requests authentication from Twitter, saves response to local storage and app state, fires getUserInfo and getFriendsIds.
 * @see {@link https://developer.twitter.com/en/docs/basics/authentication/api-reference/access_token}
 * @param {string} token
 * @param {string} verifier
 * @returns {Object} data
 * @exports getAccessToken
 */

const getAccessToken = async (token: string, verifier: string) => {
  fetch(
    `${NETLIFY_FUNCTION}?endpoint=access_token&token=${token}&verifier=${verifier}`
  )
    .then((response) => response.json())
    .then((data) => {
      localforage.setItem("access", data);
      mutate((draft) => {
        draft.access = data;
      });
      return data;
    })
    .then((data) => {
      getUserInfo(data.screen_name);
      getFriendsIds(data.screen_name);
    });
};

export default getAccessToken;
