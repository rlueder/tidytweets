// @flow

import React,{ useState } from "react";
import { Router } from "@reach/router";

import { LandingPage, Dashboard } from "components";
import { IntlProvider } from "react-intl";
import {en} from "./../../i18n";

import {
  selectAccess,
  selectFriends,
  selectRequest,
  selectUser,
} from "selectors";

import { Consumer, Provider } from "store";

import "./styles.scss";

/**
 * @function App
 * @returns React.Node
 */

const App = (): React.Node => {
  
  const [locale] = useState("en");
  const messages = { en };
  
  return (
    <Provider>
      <IntlProvider locale={locale} messages={messages[locale]}>
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
      </IntlProvider>
    </Provider>
  );
};

export default App;
