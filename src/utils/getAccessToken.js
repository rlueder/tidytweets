// @flow

import localforage from "localforage";
import { mutate } from "../store";

import { getUserInfo, getFriendsIds } from "./index";

/**
 * @async
 * @function getAccessToken
 * @param {string} TOKEN
 * @param {string} VERIFIER
 * @returns {Object} data
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
        draft.request = {};
      });
      return data;
    })
    .then((data) => {
      getUserInfo(data.screen_name);
      getFriendsIds(data.screen_name);
    });
};

export default getAccessToken;
