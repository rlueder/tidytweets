// @flow

import * as React from "react";

import { FormattedMessage } from "react-intl";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <div className="Loading">
      <div className="Loading__wrapper">
        <div className="Following__icon">
          <FontAwesomeIcon icon={faSync} size="2x" />
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
