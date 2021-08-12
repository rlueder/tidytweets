import React, { useEffect } from "react";

import { useNavigate } from "@reach/router";
import { hot } from "react-hot-loader/root";
import { FormattedMessage } from "react-intl";

import { Button, Footer, LogIn, LogOut } from "components";
import { getRequestToken } from "utils";

import "./styles.scss";

type Props = {
  path: string;
  token: string;
  username: string;
};

/**
 * @function LandingPage
 * @param {Object} props
 * @returns JSX.Element
 */

const LandingPage = (props: Props): JSX.Element => {
  const { token, username } = props;

  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      getRequestToken().catch((error: Error) => console.log(error));
    }
  }, [username]);

  return (
    <div className="LandingPage">
      {username ? (
        <>
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
        </>
      ) : (
        <>
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
        </>
      )}
      <Footer />
    </div>
  );
};

export default hot(LandingPage);
