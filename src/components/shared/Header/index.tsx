import React from "react";
import { Link } from "react-router-dom";

import { LogOut } from "components";
import "./styles.scss";

/**
 * @name Header
 * @type {Function}
 * @returns JSX.Element
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

export default Header;
