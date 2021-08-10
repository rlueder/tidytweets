import * as React from "react";

import { FormattedMessage } from "react-intl";

/**
 * @function Loading
 * @returns React.Node
 * @exports Loading
 */

const Loading = (): React.Node => {
  return (
    <div className="Loading">
      <div className="Loading__wrapper">
        <div className="Following__icon">
          <span className="material-icons">sync</span>
        </div>
        <div className="Loading__text">
          <p>
            <FormattedMessage id="Loading.paragaph--1" />
          </p>
          <p>
            <FormattedMessage id="Loading.paragaph--2" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
