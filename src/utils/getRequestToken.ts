import { NETLIFY_FUNCTION } from "../constants";
import { mutate } from "store";

/**
 * @async
 * @name getRequestToken
 * @type {Function}
 * @summary Requests OAuth request token from Twitter, writes response to state.request
 * @see {@link https://developer.twitter.com/en/docs/basics/authentication/api-reference/request_token}
 * @returns data
 */

console.log(NETLIFY_FUNCTION);

const getRequestToken = async () => {
  fetch(`${NETLIFY_FUNCTION}?endpoint=request_token`)
    .then((response) => response.json())
    .then((data) => {
      mutate((draft) => {
        draft.request = data;
      });
      return data;
    });
};

export default getRequestToken;
