import React, { useState } from "react";

import { IntlProvider } from "react-intl";
import { Routes, Route } from "react-router-dom";

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
                <Routes>
                  <Route
                    path="/"
                    element={
                      <LandingPage
                        token={request?.oauth_token}
                        username={access?.screen_name}
                      />
                    }
                  />
                  <Route
                    path="/dashboard"
                    element={
                      <Dashboard
                        access={{
                          key: access?.oauth_token,
                          secret: access?.oauth_token_secret,
                        }}
                        friends={friends}
                        user={user}
                        username={access?.screen_name}
                      />
                    }
                  />
                </Routes>
              </div>
            );
          }}
        </Consumer>
      </IntlProvider>
    </Provider>
  );
};

export default App;
