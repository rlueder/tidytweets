// @flow

import * as React from "react";
import localforage from "localforage";
import { useNavigate } from "@reach/router";

import { mutate } from "../../store";

/**
 * @function LogOut
 * @returns React.Node
 */

const LogOut = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        localforage.removeItem("access").then(() => {
          mutate((draft) => {
            draft.access = {};
          });
          navigate("/");
        });
      }}
    >
      Log Out
    </button>
  );
};

export default LogOut;
