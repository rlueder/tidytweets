// @flow

import * as React from "react";
import { useNavigate } from "@reach/router";

import { Consumer, createSelector } from "../../store";

import "./styles.scss";

type Props = {};

const LandingPage = (props: Props): React.Node => {
  const navigate = useNavigate();
  const selectSession = createSelector((state) => state.session);

  return (
    <div className="LandingPage">
      <p>TidyTweets</p>
      <Consumer select={[selectSession]}>
        {(session) => (
          <button
            onClick={() =>
              session.oauth_callback_confirmed === "true"
                ? navigate(
                    `https://api.twitter.com/oauth/authorize?oauth_token=${session.oauth_token}`,
                    { replace: true }
                  )
                : null
            }
          >
            Authorize TidyTweets
          </button>
        )}
      </Consumer>
    </div>
  );
};

export default LandingPage;
