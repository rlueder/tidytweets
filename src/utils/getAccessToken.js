// @flow

import localforage from "localforage";

import { mutate } from "store";
import { getUserInfo, getFriendsIds } from "utils";

/**
 * @async
 * @function getAccessToken
 * @summary Requests authentication from Twitter, saves response to local storage and app state, fires getUserInfo and getFriendsIds.
 * @see {@link https://developer.twitter.com/en/docs/basics/authentication/api-reference/access_token}
 * @param {string} TOKEN
 * @param {string} VERIFIER
 * @returns {Object} data
 * @exports getAccessToken
 */

const getAccessToken = async (TOKEN, VERIFIER) => {
  fetch(
    `/.netlify/functions/twitter-client?endpoint=access_token&token=${TOKEN}&verifier=${VERIFIER}`
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
