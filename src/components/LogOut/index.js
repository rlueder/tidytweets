// @flow

import * as React from "react";

import { useNavigate } from "@reach/router";
import { FormattedMessage } from "react-intl";

import localforage from "localforage";

import { Button } from "components";
import { mutate } from "store";

/**
 * @function LogOut
 * @returns React.Node
 * @exports LogOut
 */

const LogOut = (): React.Node => {
  const navigate = useNavigate();
  return (
    <Button
      label={<FormattedMessage id="LogOut.label" />}
      type="secondary"
      onClick={() => {
        localforage.clear().then(() => {
          mutate((draft) => {
            draft.access = {};
          });
          navigate("/");
        });
      }}
    />
  );
};

export default LogOut;
