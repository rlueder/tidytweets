// @flow

import * as React from "react";

import { useNavigate } from "@reach/router";
import localforage from "localforage";

import { mutate } from "../../store";
import { Button } from "../index";

/**
 * @function LogOut
 * @returns React.Node
 */

const LogOut = () => {
  const navigate = useNavigate();
  return (
    <Button
      label="Log Out"
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
