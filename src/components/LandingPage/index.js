// @flow

import React, { Fragment, useEffect } from "react";
import { hot } from "react-hot-loader/root";

import { useNavigate } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

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
              Welcome back, <span>{username}</span>!
            </h2>
            <div className="LandingPage__actions">
              <Button
                label="Continue to App"
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
              Tidy up your <span>Following</span> list on Twitter.
            </p>
            <LogIn token={token} />
          </div>
          <div className="LandingPage__about">
            <p>
              <span>TidyTweets</span> analyses your Following list on Twitter
              telling you which accounts haven't been active in a specific time
              frame (one week, two weeks, one month, three months, six months
              and a year). You can then unfollow individual accounts, selected
              accounts or all at once.
            </p>
            <p>
              Happy (tidy) tweeting!
              <FontAwesomeIcon icon={faBroom} />
              <FontAwesomeIcon icon={faTwitter} />
            </p>
          </div>
        </Fragment>
      )}
      <Footer />
    </div>
  );
};

export default hot(LandingPage);
