// @flow

import React, { Fragment, useEffect } from "react";
import { hot } from "react-hot-loader/root";

import { useNavigate } from "@reach/router";

import { Button, Footer, LogIn, LogOut } from "../index";

import { getRequestToken } from "../../utils";

import "./styles.scss";

type Props = {
  token: string,
  username: string,
};

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
          <div className="LandingPage__logo">
            <h1>TidyTweets</h1>
          </div>
          <h2>
            Welcome back, <span>{username}</span>!
          </h2>
          <Button
            label="Continue to App"
            onClick={() => navigate("/dashboard")}
          />
          <LogOut />
        </Fragment>
      ) : (
        <Fragment>
          <div className="LandingPage__logo">
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
      <Footer />
    </div>
  );
};

export default hot(LandingPage);
