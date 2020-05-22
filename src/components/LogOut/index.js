// @flow

import * as React from "react";
import localforage from "localforage";
import { useNavigate } from "@reach/router";

import { Button } from "../index";
import { mutate } from "../../store";

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
        localforage.removeItem("access").then(() => {
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
