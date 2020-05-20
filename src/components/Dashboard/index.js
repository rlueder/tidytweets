// @flow

import React, { Fragment, useEffect } from "react";
import { Link, useLocation, useNavigate } from "@reach/router";
import localforage from "localforage";

import { LogIn, LogOut } from "../index";
import { mutate } from "../../store";
import { getAccessToken, getSearchParams } from "../../utils/";

import "./styles.scss";

type Props = {
  username: string,
};

// TODO add Log Out button

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
      <Link to="/">
        <p>TidyTweets</p>
      </Link>
      <p>Dashboard</p>
      {!username ? (
        <Fragment>
          <div>Not authenticated.</div>
          <LogIn token={token} />
        </Fragment>
      ) : (
        <Fragment>
          <div>{username}</div>
          <LogOut />
        </Fragment>
      )}
    </div>
  );
};

export default Dashboard;
