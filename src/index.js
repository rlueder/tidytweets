// @flow

import React, { useEffect } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import localforage from "localforage";

import { LandingPage, Dashboard } from "./components/";
import { Consumer, createSelector, mutate, Provider } from "./store";
import { getRequestToken } from "./utils";

// import "./styles.scss";

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
      <Consumer select={[selectAccess, selectRequest]}>
        {(access, request) => {
          return (
            <div className="App">
              <Router>
                <LandingPage
                  path="/"
                  token={request.oauth_token}
                  username={access.screen_name}
                />
                <Dashboard
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
