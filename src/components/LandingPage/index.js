// @flow

import React, { Fragment, useEffect } from "react";

import { useNavigate } from "@reach/router";
import { hot } from "react-hot-loader/root";
import { FormattedMessage } from "react-intl";

import { Button, Footer, LogIn, LogOut } from "components";
import { getRequestToken } from "utils";

import "./styles.scss";

type Props = {
  token: string,
  username: string,
};

/**
 * @function LandingPage
 * @param {Object} props
 * @param {string} props.token
 * @param {string} props.username
 * @returns React.Node
 * @exports LandingPage
 */

const LandingPage = (props: Props): React.Node => {
  const { token, username } = props;

  useEffect(() => {
    if (!username) {
      getRequestToken();
    }
  }, [username]);

  const navigate = useNavigate();

  return (
    <div className="LandingPage">
      {username ? (
        <Fragment>
          <div />
          <div className="LandingPage__intro">
            <div className="LandingPage__logo">
              <h1>TidyTweets</h1>
            </div>
            <h2>
              <FormattedMessage id="LandingPage.intro--welcome" />
              <span>{username}</span>!
            </h2>
            <div className="LandingPage__actions">
              <Button
                label={<FormattedMessage id="LandingPage.label" />}
                onClick={() => navigate("/dashboard")}
              />
              <LogOut />
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="LandingPage__intro">
            <div className="LandingPage__logo">
              <h1>TidyTweets</h1>
            </div>
            <p>
              <FormattedMessage
                id="LandingPage.intro"
                values={{
                  italics: (
                    <span>
                      <FormattedMessage id="LandingPage.intro--italics" />
                    </span>
                  ),
                }}
              />
            </p>
            <LogIn token={token} />
          </div>
          <div className="LandingPage__about">
            <p>
              <FormattedMessage id="LandingPage.about" />
            </p>
          </div>
        </Fragment>
      )}
      <Footer />
    </div>
  );
};

export default hot(LandingPage);
