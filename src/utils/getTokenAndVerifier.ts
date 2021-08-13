/**
 * @name getTokenAndVerifier
 * @type {Function}
 * @summary Parses and returns token and verifier values from redirect URL parameters.
 * @see {@link https://developer.twitter.com/en/docs/basics/authentication/api-reference/request_token}
 * @param {URLSearchParams} searchParams
 * @returns {Object}
 * @returns {string} Object.token
 * @returns {string} Object.verifier
 */

const getTokenAndVerifier = (searchParams: URLSearchParams) => {
  return {
    token: searchParams.get("oauth_token") || "",
    verifier: searchParams.get("oauth_verifier") || "",
  };
};

export default getTokenAndVerifier;
