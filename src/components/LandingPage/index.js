// @flow

import React, { Fragment } from "react";
import { useNavigate } from "@reach/router";

import { LogIn, LogOut } from "../index";

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
        <div>
          <h1>{`Welcome back, ${username}!`}</h1>
          <button onClick={() => navigate("/dashboard")}>
            Continue do Dashboard
          </button>
          <LogOut />
        </div>
      ) : (
        <Fragment>
          <p>TidyTweets</p>
          <LogIn token={token} />
        </Fragment>
      )}
    </div>
  );
};

export default LandingPage;
