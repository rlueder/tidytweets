// @flow

import { getTokenAndVerifier } from "utils";

const TOKEN = "UsUyYAAAAAABEYulAAXXXXXXXXX";
const VERIFIER = "mgoV0qypRm5VUrAfRRL1IB2XXXXXXXXX";

const SEARCH_PARAMS = new URLSearchParams(
  `?oauth_token=${TOKEN}&oauth_verifier=${VERIFIER}`
);

describe("getTokenAndVerifier()", () => {
  test("extracts oauth_token and verifier from uri", () => {
    expect(getTokenAndVerifier(SEARCH_PARAMS)).toEqual({
      token: TOKEN,
      verifier: VERIFIER,
    });
  });
});
