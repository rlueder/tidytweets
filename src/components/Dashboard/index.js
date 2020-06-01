// @flow

import React, { Fragment, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { useLocation } from "@reach/router";

import {
  getAccessToken,
  getFriendsInfo,
  getTokenAndVerifier,
} from "../../utils/";

import { Header, LogIn } from "../index";

import { Following } from "./components";

import "./styles.scss";

type Props = {
  access: Object,
  friends: Array<number>,
  token: string,
  username: string,
};

const Dashboard = (props: Props) => {
  const { access, friends, token, username } = props;

  const location = useLocation();

  useEffect(() => {
    const SEARCH_PARAMS = new URLSearchParams(location.search);
    const { token, verifier } = getTokenAndVerifier(SEARCH_PARAMS);
    // access token
    if (token && verifier && !username) {
      getAccessToken(token, verifier);
    }
    // friends information
    getFriendsInfo(username, friends.ids);
  }, [friends.ids, location, username]);

  const renderComponent = () => {
    switch (true) {
      case !username:
        return (
          <Fragment>
            <div>Not authenticated.</div>
            <LogIn token={token} />
          </Fragment>
        );
      case friends.data && !friends.data.length:
        return (
          <div>
            <p>Analysing your Twitter Following list...</p>
            <p>(this might take a while depending on how large your list is)</p>
          </div>
        );
      default:
        return (
          <Following
            access={access}
            friends={friends.data}
            username={username}
          />
        );
    }
  };

  return (
    <div className="Dashboard">
      <Header />
      {renderComponent()}
    </div>
  );
};

export default hot(Dashboard);
