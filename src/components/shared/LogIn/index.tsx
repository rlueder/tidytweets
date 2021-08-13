import React from "react";

import { createBrowserHistory } from "history";
import { FormattedMessage } from "react-intl";

import { Button } from "components/index";

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
  const history = createBrowserHistory();
  return (
    <Button
      label={<FormattedMessage id="LogIn.label" />}
      onClick={() =>
        history.push(
          `https://api.twitter.com/oauth/authorize?oauth_token=${token}`
        )
      }
    />
  );
};

export default LogIn;
