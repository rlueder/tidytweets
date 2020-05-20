// @flow

const dotenv = require("dotenv").config();
const Twitter = require("twitter-lite");

const { CONSUMER_KEY, CONSUMER_SECRET } = process.env;

/**
 * @module twitterClient
 * @summary Request Auth Token and Secret from Twitter API
 * @see {@link https://github.com/draftbit/twitter-lite}
 * @see {@link https://developer.twitter.com/en/docs/basics/authentication/oauth-1-0a/obtaining-user-access-tokens}
 */

const twitterClient = new Twitter({
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
});

exports.handler = async (event, context, callback) => {
  const { endpoint, token, verifier } = event.queryStringParameters;
  try {
    let response;
    switch (endpoint) {
      case "access_token":
        response = await twitterClient.getAccessToken({
          oauth_token: token,
          oauth_verifier: verifier,
        });
        break;
      case "request_token":
        // TODO refactor
        let CALLBACK_URL;
        switch (process.env.NODE_ENV) {
          case "production":
            CALLBACK_URL = "https://tidytweets.netlify.app/dashboard";
            break;
          default:
            CALLBACK_URL = "http://localhost:8888/dashboard";
        }
        response = await twitterClient.getRequestToken(CALLBACK_URL);
        break;
      default:
      // no default
    }
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
