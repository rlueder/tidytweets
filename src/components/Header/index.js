// @flow

import * as React from "react";

import { Link } from "@reach/router";
import { hot } from "react-hot-loader/root";

import { LogOut } from "components";

import "./styles.scss";

/**
 * @function Header
 * @returns React.Node
 * @exports Header
 */

const Header = (): React.Node => {
  return (
    <header className="Header">
      <Link to="/">
        <h1>TidyTweets</h1>
      </Link>
      <LogOut />
    </header>
  );
};

export default hot(Header);
