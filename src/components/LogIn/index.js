// @flow

import * as React from "react";
import { useNavigate } from "@reach/router";

type Props = {
  token: string,
};

/**
 * @function LogIn
 * @param {string} TOKEN
 * @returns React.Node
 */

const LogIn = (props: Props) => {
  const { token } = props;
  const navigate = useNavigate();
  return (
    <button
      onClick={() =>
        navigate(
          `https://api.twitter.com/oauth/authorize?oauth_token=${token}`,
          { replace: true }
        )
      }
    >
      Log In
    </button>
  );
};

export default LogIn;
