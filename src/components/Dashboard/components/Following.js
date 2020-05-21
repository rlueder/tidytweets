// @flow

import * as React from "react";

import { Filter } from "../../index";
import { Friend } from "./index";

type Props = {};

/**
 * @function Following
 * @returns React.Node
 * @exports Following
 */

const Following = (props: Props) => {
  return (
    <div className="Following">
      <Filter />
      <Friend />
    </div>
  );
};

export default Following;
