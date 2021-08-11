import React from "react";

import { useNavigate } from "@reach/router";
import { FormattedMessage } from "react-intl";

import { Button } from "components";

type Props = {
  token: string;
};

/**
 * @name LogIn
 * @type {Function}
 * @param {Object} props
 * @returns JSX.Element
 */

const LogIn = (props: Props): JSX.Element => {
  const { token } = props;
  const navigate = useNavigate();
  return (
    <Button
      label={<FormattedMessage id="LogIn.label" />}
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
