// @flow

import React, { Fragment, useEffect } from "react";
import { hot } from "react-hot-loader/root";

import { useNavigate } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { Button, Footer, LogIn, LogOut } from "components";
import { getRequestToken } from "utils";

import { FormattedMessage } from "react-intl";


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
              <h1>
              <FormattedMessage id="landingPage.appName"/>
              </h1>
            </div>
            <h2>
            <FormattedMessage id="landingPage.welcomeMessage"/>, <span>{username}</span>!
            </h2>
            <div className="LandingPage__actions">
              <Button
                label={ <FormattedMessage id="landingPage.buttonContinue"/>}
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
              <h1>
              <FormattedMessage id="landingPage.appName"/>
              </h1>
            </div>
            <p>
              <FormattedMessage 
              id="landingPage.subTitle"
              values={{Following: (
                <span><FormattedMessage id="landingPage.Following"/></span> 
            )}}
              />
            </p>
            <LogIn token={token} />
          </div>
          <div className="LandingPage__about">
            <p>
            <FormattedMessage id="landingPage.description"
              values={{title: (
                <span><FormattedMessage id="landingPage.appName"/></span> 
            )}}
            />
            </p>
            <p>
            <FormattedMessage id="landingPage.finalDescription"/>
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
