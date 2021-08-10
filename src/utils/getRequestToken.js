import { mutate } from "store";

/**
 * @async
 * @function getRequestToken
 * @summary Requests OAuth request token from Twitter, writes response to state.request
 * @see {@link https://developer.twitter.com/en/docs/basics/authentication/api-reference/request_token}
 * @returns data
 * @exports getRequestToken
 */

const URL = "/.netlify/functions/twitter-client?endpoint=request_token";

const getRequestToken = async () => {
  fetch(URL)
    .then((response) => response.json())
    .then((data: string) => {
      mutate((draft: { request: string }) => {
        draft.request = data;
      });
      return data;
    });
};

export default getRequestToken;
