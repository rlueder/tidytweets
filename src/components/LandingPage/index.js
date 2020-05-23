// @flow

import React, { Fragment } from "react";
import { useNavigate } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { Button, LogIn, LogOut } from "../index";

import "./styles.scss";

type Props = {
  token: string,
  username: string,
};

const LandingPage = (props: Props): React.Node => {
  const { token, username } = props;
  const navigate = useNavigate();
  return (
    <div className="LandingPage">
      {username ? (
        <Fragment>
          <div className="LandingPage__logo">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <h1>TidyTweets</h1>
          </div>
          <h2>
            Welcome back, <span>{username}</span>!
          </h2>
          <Button
            label="Continue to Dashboard"
            onClick={() => navigate("/dashboard")}
          />
          <LogOut />
        </Fragment>
      ) : (
        <Fragment>
          <div className="LandingPage__logo">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <h1>TidyTweets</h1>
          </div>
          <div className="LandingPage__intro">
            <p>
              Tidy up your <span>Following</span> list on Twitter.
            </p>
            <LogIn token={token} />
          </div>
        </Fragment>
      )}
      <footer>
        Copyleft <span>©</span> 2020. Some rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
