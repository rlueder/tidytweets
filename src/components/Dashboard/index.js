// @flow

import React, { Fragment, useEffect } from "react";
import { Link, useLocation, useNavigate } from "@reach/router";
import localforage from "localforage";

import { Header, LogIn, LogOut } from "../index";
import { Analytics, Following, Lists } from "./components";

import { mutate } from "../../store";
import { getAccessToken, getSearchParams } from "../../utils/";

import "./styles.scss";

type Props = {
  username: string,
};

const Dashboard = (props: Props) => {
  const { token, username } = props;

  const location = useLocation();
  const navigate = useNavigate();

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
              <Following />
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
