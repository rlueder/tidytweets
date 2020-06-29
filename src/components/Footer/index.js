// @flow

import * as React from "react";

import { FormattedMessage } from "react-intl";

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
        <FormattedMessage id="Footer.paragraph" />
        <a href="https://buymeacoffee.com/rlueder">
          <FormattedMessage id="Footer.link" />
        </a>
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
