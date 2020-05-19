// @flow

const twitterClient = require("./client");

exports.handler = async (event, context, callback) => {
  const ENDPOINT = event.queryStringParameters.endpoint;
  console.log(ENDPOINT);

  try {
    let response;
    switch (ENDPOINT) {
      case "access_token":
        response = await twitterClient.getAccessToken();
        break;
      case "request_token":
        const CALLBACK_URL = "http://localhost:8888/dashboard"; // replace CALLBACK_URL in PROD
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
