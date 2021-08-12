import React, { useState } from "react";

import { Router } from "@reach/router";
import { IntlProvider } from "react-intl";

import { LandingPage, Dashboard } from "./index";
import getTranslations from "i18n";

import { Consumer, Provider } from "store";

import type { Access, Friend, Request, User } from "definitions";

import {
  selectAccess,
  selectFriends,
  selectRequest,
  selectUser,
} from "selectors";

import "./styles.scss";

/**
 * @function App
 * @returns JSX.Element
 */

const App = (): JSX.Element => {
  const language = navigator.language.split(/[-_]/)[0];

  const [
    locale,
    // setLocale
  ] = useState(language);

  return (
    <Provider>
      <IntlProvider
        defaultLocale="en"
        locale={locale}
        messages={getTranslations(language)}
      >
        <Consumer
          select={[selectAccess, selectFriends, selectRequest, selectUser]}
        >
          {(
            access: Access,
            friends: {
              data: Array<Friend>;
              ids: Array<number>;
            },
            request: Request,
            user: User
          ) => {
            return (
              <div className="App">
                <Router>
                  <LandingPage
                    path="/"
                    token={request?.oauth_token}
                    username={access?.screen_name}
                  />
                  <Dashboard
                    access={{
                      key: access?.oauth_token,
                      secret: access?.oauth_token_secret,
                    }}
                    friends={friends}
                    path="/dashboard"
                    user={user}
                    username={access?.screen_name}
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
