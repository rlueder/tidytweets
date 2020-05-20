// @flow

const twitterClient = require("./client");

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
        const CALLBACK_URL = "http://localhost:8888/dashboard"; // replace CALLBACK_URL in PROD
        response = await twitterClient.getRequestToken(CALLBACK_URL);
        break;
      case "verify_credentials":
        response = await twitterClient.get("account/verify_credentials");
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
