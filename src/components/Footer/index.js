// @flow

import * as React from "react";

import "./styles.scss";

import { FormattedMessage } from "react-intl";


/**
 * @function Footer
 * @returns React.Node
 * @exports Footer
 */

const Footer = (): React.Node => {
  return (
    <footer className="Footer">
      <p>
      <FormattedMessage id="footer.footerText"/>
        <a href="https://buymeacoffee.com/rlueder"><FormattedMessage id="footer.buyCoffe"/></a>
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
