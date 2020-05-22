// @flow

import React, { Fragment, useEffect } from "react";
import { useLocation } from "@reach/router";

import { Header, LogIn } from "../index";
import { Analytics, Following, Lists } from "./components";
import { getAccessToken, getSearchParams } from "../../utils/";

import "./styles.scss";

type Props = {
  friends: Array<number>,
  token: string,
  username: string,
};

const Dashboard = (props: Props) => {
  const { friends, token, username } = props;

  const location = useLocation();

  useEffect(() => {
    const SEARCH_PARAMS = new URLSearchParams(location.search);
    const { token, verifier } = getSearchParams(SEARCH_PARAMS);
    if (token && verifier) {
      getAccessToken(token, verifier);
    }
  }, [location]);

  return (
    <div className="Dashboard">
      <Header />
      {!username ? (
        <Fragment>
          <div>Not authenticated.</div>
          <LogIn token={token} />
        </Fragment>
      ) : (
        <Fragment>
          <main>
            <div className="Layout">
              <Following friends={friends} username={username} />
              <Analytics />
              <Lists />
            </div>
          </main>
          <footer></footer>
        </Fragment>
      )}
    </div>
  );
};

export default Dashboard;
