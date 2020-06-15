// @flow

import * as React from "react";

import "./styles.scss";

/**
 * @function Footer
 * @returns React.Node
 * @exports Footer
 */

const Footer = (): React.Node => {
  return (
    <footer className="Footer">
      <p>
        TidyTweets is free and open-source software, if you find it useful
        consider
        <a href="https://buymeacoffee.com/rlueder">buying me a coffee.</a>
      </p>
      <a href="https://www.netlify.com">
        <img
          src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
          alt="Deploys by Netlify"
        />
      </a>
    </footer>
  );
};

export default Footer;
