// @flow

import localforage from "localforage";
import { mutate } from "../store";

/**
 * @async
 * @function getAccessToken
 * @param {string} TOKEN
 * @param {string} VERIFIER
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
    });
};

export default getAccessToken;
