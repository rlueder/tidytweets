// @flow

import React, { useEffect } from "react";

import { Filter } from "../../index";
import { Friend } from "./index";

import { getFriendsInfo } from "../../../utils";

type Props = {
  friends: Array<number>,
  username: string,
};

/**
 * @function Following
 * @returns React.Node
 * @exports Following
 */

const Following = (props: Props) => {
  const { friends, username } = props;

  useEffect(() => {
    getFriendsInfo(username, friends.ids);
  }, [friends, username]);

  return (
    <div className="Following">
      <Filter />
      {friends.data && friends.data.length
        ? friends.data.map((friend) => (
            <Friend data={friend} key={friend.id_str} />
          ))
        : null}
    </div>
  );
};

export default Following;
