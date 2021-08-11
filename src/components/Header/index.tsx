import React from "react";

import { Link } from "@reach/router";
import { hot } from "react-hot-loader/root";

import { LogOut } from "components";

import "./styles.scss";

/**
 * @function Header
 * @returns JSX.Element
 * @exports Header
 */

const Header = (): JSX.Element => {
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
