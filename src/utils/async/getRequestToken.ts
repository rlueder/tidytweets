import { TWITTER_CLIENT } from "../../constants";
import { mutate } from "store";

import type { State } from "definitions";

/**
 * @async
 * @name getRequestToken
 * @type {Function}
 * @summary Requests OAuth request token from Twitter, writes response to state.request
 * @see {@link https://developer.twitter.com/en/docs/basics/authentication/api-reference/request_token}
 * @returns data
 */

const getRequestToken = async () => {
  fetch(`${TWITTER_CLIENT}?endpoint=request_token`)
    .then((response) => response.json())
    .then((data: State) => {
      mutate((draft) => {
        draft.request = data;
      });
      return data;
    });
};

export default getRequestToken;
