// @flow

import * as React from "react";

import { requestToken } from "../../utils";

import "./styles.scss";

type Props = {};

const LandingPage = (props: Props) => {
  React.useEffect(() => {
    requestToken();
  }, []);

  return (
    <div className="LandingPage">
      <p>TidyTweets</p>
      <button onClick={() => console.log("Authorize!")}>
        Authorize TidyTweets
      </button>
    </div>
  );
};

export default LandingPage;
