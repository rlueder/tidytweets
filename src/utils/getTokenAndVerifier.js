// @flow

/**
 * @function getTokenAndVerifier
 * @param {URLSearchParams} SEARCH_PARAMS
 * @returns {Object}
 * @returns {string} Object.token
 * @returns {string} Object.verifier
 */

const getTokenAndVerifier = (SEARCH_PARAMS: URLSearchParams) => {
  const TOKEN = SEARCH_PARAMS.get("oauth_token");
  const VERIFIER = SEARCH_PARAMS.get("oauth_verifier");
  return {
    token: TOKEN ? TOKEN : "",
    verifier: VERIFIER ? VERIFIER : "",
  };
};

export default getTokenAndVerifier;
