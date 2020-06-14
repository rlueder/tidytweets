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
            <p>This is a test for Netlify branch deployments!</p>
            <LogIn token={token} />
          </div>
        </Fragment>
      )}
      <Footer />
    </div>
  );
};

export default hot(LandingPage);
