import localforage from "localforage";

import { TWITTER_CLIENT } from "../../constants";

import type { Access } from "definitions";
import { mutate } from "store";
import { getUserInfo, getFriendsIds } from "utils";

/**
 * @async
 * @name getAccessToken
 * @type {Function}
 * @summary Requests authentication from Twitter, saves response to local storage and app state, fires getUserInfo and getFriendsIds.
 * @see {@link https://developer.twitter.com/en/docs/basics/authentication/api-reference/access_token}
 * @param {string} token
 * @param {string} verifier
 * @returns {Object} data
 */

const getAccessToken = async (token: string, verifier: string) => {
  fetch(
    `${TWITTER_CLIENT}?endpoint=access_token&token=${token}&verifier=${verifier}`
  )
    .then((response) => response.json())
    .then((data: Access) => {
      localforage.setItem("access", data);
      mutate((draft) => {
        draft.access = data;
      });
      return data;
    })
    .then((data: { screen_name: string }) => {
      getUserInfo(data.screen_name);
      getFriendsIds(data.screen_name);
    });
};

export default getAccessToken;
