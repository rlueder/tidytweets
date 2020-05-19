// @flow

import Twitter from "twitter-lite";

/**
 * @function requestToken
 * @summary Request Auth Token and Secret from Twitter API
 * @see {@link https://developer.twitter.com/en/docs/basics/authentication/oauth-1-0a/obtaining-user-access-tokens}
 * @returns {string} REQUEST_TOKEN
 */

const { REACT_APP_CONSUMER_KEY, REACT_APP_CONSUMER_SECRET } = process.env;

// replace CALLBACK_URL in PROD
const CALLBACK_URL = "http://localhost:3000/dashboard";

const requestToken = async () => {
  fetch("/.netlify/functions/node-fetch/", {
    headers: { accept: "Accept: application/json" },
  })
    .then((x) => x.json())
    .then(({ msg }) => msg);

  // const TwitterClient = new Twitter({
  //   consumer_key: REACT_APP_CONSUMER_KEY,
  //   consumer_secret: REACT_APP_CONSUMER_SECRET,
  // });

  // TwitterClient.getRequestToken(CALLBACK_URL)
  //   .then((response) => {
  //     console.log(response);
  //     console.log({
  //       token: response.oauth_token,
  //       tokenSecret: response.oauth_token_secret,
  //     });
  //   })
  //   .catch(console.error);
};

export default requestToken;
