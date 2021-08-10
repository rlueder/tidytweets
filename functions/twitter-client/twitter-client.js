const dotenv = require("dotenv").config();
const Twitter = require("twitter-lite");

const { CALLBACK_URL, CONSUMER_KEY, CONSUMER_SECRET } = process.env;

/**
 * @module twitterClient
 * @summary Request Auth Token and Secret from Twitter API
 * @see {@link https://github.com/draftbit/twitter-lite}
 * @see {@link https://developer.twitter.com/en/docs/basics/authentication/oauth-1-0a/obtaining-user-access-tokens}
 */

exports.handler = async (event) => {
  const {
    access_key,
    access_secret,
    endpoint,
    screen_name,
    user_id,
  } = event.queryStringParameters;

  const twitterClient = new Twitter({
    consumer_key: CONSUMER_KEY,
    consumer_secret: CONSUMER_SECRET,
  });

  const bearer = await twitterClient.getBearerToken();

  const bearerClient = new Twitter({
    bearer_token: bearer.access_token,
    consumer_key: CONSUMER_KEY,
    consumer_secret: CONSUMER_SECRET,
  });

  const userClient = new Twitter({
    access_token_key: access_key,
    access_token_secret: access_secret,
    consumer_key: CONSUMER_KEY,
    consumer_secret: CONSUMER_SECRET,
  });

  try {
    let response;
    switch (endpoint) {
      /**
       * OAuth Requests
       */
      case "access_token":
        const { token, verifier } = event.queryStringParameters;
        response = await twitterClient.getAccessToken({
          oauth_token: token,
          oauth_verifier: verifier,
        });
        break;
      case "request_token":
        response = await twitterClient.getRequestToken(CALLBACK_URL);
        break;
      /**
       * Bearer Token Requests
       */
      case "friends_ids":
        const { count } = event.queryStringParameters;
        response = await bearerClient.get("/friends/ids", {
          count: count,
          screen_name: screen_name,
        });
        break;
      case "users_lookup":
        response = await bearerClient.get("/users/lookup", {
          include_entities: false,
          screen_name: screen_name,
          user_id: user_id,
        });
        break;
      case "users_show":
        response = await bearerClient.get("/users/show", {
          include_entities: false,
          screen_name: screen_name,
        });
        break;
      /**
       * User Context Requests
       */
      case "friendships_destroy":
        response = await userClient.post("/friendships/destroy", {
          user_id: user_id,
        });
        break;
      default:
      // no default
    }
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
