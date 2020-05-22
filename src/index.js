// @flow

import React, { useEffect } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import localforage from "localforage";

import { LandingPage, Dashboard } from "./components/";
import { Consumer, createSelector, mutate, Provider } from "./store";
import { getRequestToken } from "./utils";

import "./assets/styles/styles.scss";

localforage.config({
  driver: localforage.LOCALSTORAGE,
});

/**
 * @function App
 * @param {Object} props
 * @returns React.Node
 */

const App = (): React.Node => {
  const selectAccess = createSelector((state) => state.access);
  const selectFriends = createSelector((state) => state.friends);
  const selectRequest = createSelector((state) => state.request);

  useEffect(() => {
    localforage.keys().then((keys) => {
      if (!keys.length) {
        getRequestToken();
      } else {
        localforage.getItem("access").then((access) => {
          if (Object.keys(access).length) {
            mutate((draft) => {
              draft.access = access;
            });
          } else {
            getRequestToken();
          }
        });
      }
    });
  });

  return (
    <Provider>
      <Consumer select={[selectAccess, selectFriends, selectRequest]}>
        {(access, friends, request) => {
          return (
            <div className="App">
              <Router>
                <LandingPage
                  path="/"
                  token={request.oauth_token}
                  username={access.screen_name}
                />
                <Dashboard
                  friends={friends}
                  path="/dashboard"
                  token={request.oauth_token}
                  username={access.screen_name}
                />
              </Router>
            </div>
          );
        }}
      </Consumer>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
