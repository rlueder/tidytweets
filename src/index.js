// @flow

import * as React from "react";

import { render } from "react-dom";
import { Router } from "@reach/router";

import { LandingPage, Dashboard } from "./components/";

import {
  selectAccess,
  selectFriends,
  selectRequest,
  selectUser,
} from "./selectors";

import { Consumer, Provider, createSelector } from "./store";

import "./assets/styles/styles.scss";

// TODO
// - after unfollowing remove item from list
// - confirm before bulk unfollow

// FIX
// - fix loading states
// - fix bug with missing username prop on LandingPage

// NICE TO HAVE
// - add avatar to Header
// - display alert bar with confirmation of account removal ?
// - consider adding some features like "following/subscribing to a tweet"

/**
 * @function App
 * @returns React.Node
 */

const App = (): React.Node => {
  return (
    <Provider>
      <Consumer
        select={[selectAccess, selectFriends, selectRequest, selectUser]}
      >
        {(access, friends, request, user) => {
          return (
            <div className="App">
              <Router>
                <LandingPage
                  path="/"
                  request={request}
                  username={access.screen_name}
                />
                <Dashboard
                  access={{
                    key: access.oauth_token,
                    secret: access.oauth_token_secret,
                  }}
                  friends={friends}
                  path="/dashboard"
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
