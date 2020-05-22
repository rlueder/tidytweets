// @flow

import { mutate } from "../store";

/**
 * @async
 * @function getUserInfo
 * @param {string} SCREEN_NAME
 */

const getUserInfo = async (SCREEN_NAME: string) => {
  fetch(
    `/.netlify/functions/twitter-client?endpoint=users_show&screen_name=${SCREEN_NAME}`
  )
    .then((response) => response.json())
    .then((data) => {
      mutate((draft) => {
        draft.user = data;
      });
      return data;
    });
};

export default getUserInfo;
