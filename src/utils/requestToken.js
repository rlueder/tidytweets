// @flow

import { mutate } from "../store";

/**
 * @async
 * @function requestToken
 */

const requestToken = async () => {
  fetch("/.netlify/functions/twitter-client?endpoint=request_token")
    .then((response) => response.json())
    .then((data) => {
      mutate((draft) => {
        draft.session = data;
      });
    });
};

export default requestToken;
