// @flow

import * as React from "react";

import { Button } from "../../index";

type Props = {};

/**
 * @function Friend
 * @returns React.Node
 */

const Friend = (props: Props) => {
  return (
    <div className="Friend">
      <div>
        <div className="Friend__avatar">
          {/* <img alt="Avatar" src="" /> */}
        </div>
      </div>
      <div>
        <div className="Friend__id">
          <h1>Jordan Mechner</h1>
          <h2>@jmechner</h2>
        </div>
        <div className="Friend__descrption">
          <p>Making games, books, movies, and keeping a journal since 1982.</p>
        </div>
      </div>
      <Button label="Unfollow" />
    </div>
  );
};

export default Friend;
