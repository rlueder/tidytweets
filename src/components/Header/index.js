// @flow

import * as React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { LogOut } from "../index";

import "./styles.scss";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <FontAwesomeIcon icon={faTwitter} />
        <h1>TidyTweets</h1>
      </Link>
      <LogOut />
    </header>
  );
};

export default Header;
