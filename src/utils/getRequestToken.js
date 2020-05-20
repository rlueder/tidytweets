// @flow

import { mutate } from "../store";

/**
 * @async
 * @function getRequestToken
 */

const getRequestToken = async () => {
  fetch("/.netlify/functions/twitter-client?endpoint=request_token")
    .then((response) => response.json())
    .then((data) => {
      mutate((draft) => {
        draft.request = data;
      });
    });
};

export default getRequestToken;
