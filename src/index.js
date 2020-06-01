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

// TODO

// - fix loading states
// - after unfollowing remove item from list
// - confirm before bulk unfollow

// FIX

// - fix bug when logging out and trying to log back in
// - fix bug with missing username prop on LandingPage

// NICE TO HAVE

// - add avatar to Header
// - display alert bar with confirmation of account removal ?
// - consider adding some features like "following/subscribing to a tweet"

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
                  access={{
                    key: access.oauth_token,
                    secret: access.oauth_token_secret,
                  }}
                  friends={friends}
                  path="/dashboard"
                  request={{
                    token: request.oauth_token,
                  }}
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
