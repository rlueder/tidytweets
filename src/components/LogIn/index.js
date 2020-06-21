// @flow

import * as React from "react";
import { useNavigate } from "@reach/router";

import { Button } from "components";

type Props = {
  token: string,
};

/**
 * @function LogIn
 * @param {Object} props
 * @param {string} props.token
 * @returns React.Node
 */

const LogIn = (props: Props): React.Node => {
  const { token } = props;
  const navigate = useNavigate();
  return (
    <Button
      label="Sign In with Twitter"
      onClick={() =>
        navigate(
          `https://api.twitter.com/oauth/authorize?oauth_token=${token}`,
          { replace: true }
        )
      }
    />
  );
};

export default LogIn;
