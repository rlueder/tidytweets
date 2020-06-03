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

import { Consumer, Provider } from "./store";

import "./assets/styles/styles.scss";

// TODO
// - display confirmation before bulk unfollow
// - "Unfollow Selected" and "Unfollow All" require multiple promises
// - "Following" lists with more than 5,000 need multiple promises
// - improve Flow type checking and test coverage with Jest
// - update README and CHANGELOG
// - add more information to LandingPage (screenshots, FAQ)

// FIX
// - recover from IndexedDB after closing browser/tab
// - fetch user info on reload

// NICE TO HAVE
// - transitions between screens/states
// - clear callback parameters from address bar after loading is finished
// - timeframe selection should be a Select component
// - checkmark should have lower opacity to show avatar behind it
// - create a "wizard" flow to stop following accts, remove suspended accts and organize lists
// - add button to also remove suspended/inactive accounts
// - allow users to create/remove and assign accounts to Lists

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
