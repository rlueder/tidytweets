// @flow

import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../index";

import "./styles.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__buymeacoffee">
        If you found TidyTweets to be useful, perhaps
        <Button
          label="Buy Me a Coffee?"
          size="small"
          onClick={() => window.open("https://buymeacoffee.com/rlueder")}
        >
          <FontAwesomeIcon icon={faCoffee} size="xs" />
        </Button>
      </div>
      <p className="Footer__small">
        Copyleft <span>©</span> 2020. Some rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
