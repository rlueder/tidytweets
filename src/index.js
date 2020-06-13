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
