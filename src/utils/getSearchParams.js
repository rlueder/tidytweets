// @flow

/**
 * @function getSearchParams
 * @param {URLSearchParams} SEARCH_PARAMS
 * @returns {Object}
 * @returns {string} Object.token
 * @returns {string} Object.verifier
 */

const getSearchParams = (SEARCH_PARAMS: URLSearchParams) => {
  const TOKEN = SEARCH_PARAMS.get("oauth_token");
  const VERIFIER = SEARCH_PARAMS.get("oauth_verifier");
  return {
    token: TOKEN ? TOKEN : "",
    verifier: VERIFIER ? VERIFIER : "",
  };
};

export default getSearchParams;
