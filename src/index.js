// @flow

import * as React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import { LandingPage, Dashboard } from "./components/";
import { Provider } from "./store";
import { requestToken } from "./utils";

// import "./styles.scss";

/**
 * @function App
 * @param {Object} props
 * @returns React.Node
 */

const App = (): React.Node => {
  React.useEffect(() => {
    requestToken();
  }, []);
  return (
    <Provider>
      <div className="App">
        <Router>
          <LandingPage path="/" />
          <Dashboard path="dashboard" />
        </Router>
      </div>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
