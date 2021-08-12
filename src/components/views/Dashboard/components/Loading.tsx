import React from "react";

import { FormattedMessage } from "react-intl";

/**
 * @function Loading
 * @returns JSX.Element
 * @exports Loading
 */

const Loading = (): JSX.Element => {
  return (
    <div className="Loading">
      <div className="Loading__wrapper">
        <div className="Following__icon">
          <span className="material-icons">sync</span>
        </div>
        <div className="Loading__text">
          <p>
            <FormattedMessage id="Loading.paragraph--1" />
          </p>
          <p>
            <FormattedMessage id="Loading.paragraph--2" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
