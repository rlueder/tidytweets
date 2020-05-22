// @flow

import React, { Fragment } from "react";
import { useNavigate } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

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
          <div className="LandingPage__logo">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <h1>TidyTweets</h1>
          </div>
          <div>
            <p>Tidy up your Following list on Twitter.</p>
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
