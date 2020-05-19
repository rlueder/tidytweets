// @flow

import * as React from "react";
import { useLocation } from "@reach/router";

import { Consumer, createSelector, mutate } from "../../store";

import "./styles.scss";

type Props = {};

const Dashboard = (props: Props) => {
  const selectSession = createSelector((state) => state.session);

  const OAUTH_VERIFIER = new URLSearchParams(useLocation().search).get(
    "oauth_verifier"
  );

  // React.useEffect(() => {
  // TODO dispatch request to oauth/access_token
  // }, []);

  return (
    <div className="Dashboard">
      <p>Dashboard</p>

      <Consumer select={[selectSession]}>
        {(session) => (
          <React.Fragment>
            <div>{session.oauth_token}</div>
            <div>{OAUTH_VERIFIER}</div>
          </React.Fragment>
        )}
      </Consumer>
    </div>
  );
};

export default Dashboard;
