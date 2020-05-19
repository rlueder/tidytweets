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

module.exports = twitterClient;
