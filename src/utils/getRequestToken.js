// @flow

import { mutate } from "store";

/**
 * @async
 * @function getRequestToken
 * @summary Requests OAuth request token from Twitter, writes response to state.request
 * @see {@link https://developer.twitter.com/en/docs/basics/authentication/api-reference/request_token}
 * @returns data
 * @exports getRequestToken
 */

const getRequestToken = async () => {
  fetch("/.netlify/functions/twitter-client?endpoint=request_token")
    .then((response) => response.json())
    .then((data) => {
      mutate((draft) => {
        draft.request = data;
      });
      return data;
    });
};

export default getRequestToken;
