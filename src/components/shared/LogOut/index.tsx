import React from "react";

import { useNavigate } from "@reach/router";
import { FormattedMessage } from "react-intl";
import localforage from "localforage";

import { Button } from "components/index";
import { mutate } from "store";

/**
 * @name LogOut
 * @type {Function}
 * @returns JSX.Element
 */

const LogOut = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Button
      label={<FormattedMessage id="LogOut.label" />}
      type="secondary"
      onClick={() => {
        localforage.clear().then(() => {
          mutate((draft: { access: Object }) => {
            draft.access = {};
          });
          navigate("/").catch((error: Error) => console.log(error));
        });
      }}
    />
  );
};

export default LogOut;
