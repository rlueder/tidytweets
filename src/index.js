// @flow

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Twit from "twit";

const T = new Twit({
  consumer_key: process.env.REACT_APP_CONSUMER_KEY,
  consumer_secret: process.env.REACT_APP_CONSUMER_SECRET,
  access_token: process.env.REACT_APP_ACCESS_TOKEN,
  access_token_secret: process.env.REACT_APP_ACCESS_SECRET,
  // timeout_ms:           60000,
  strictSSL: true,
});

T.get("followers/ids", { screen_name: "raflueder" }, (err, data, response) => {
  if (err) {
    console.log(err);
  }

  console.log(data);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
