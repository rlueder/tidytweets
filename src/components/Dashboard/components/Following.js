// @flow

import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";

import { isBefore, subMonths, subWeeks } from "date-fns";
import uniq from "lodash.uniq";

import { Button, Filter } from "../../index";
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

  let INACTIVE_FRIENDS = [];
  if (friends.data && friends.data.length) {
    for (let friend of uniq(friends.data)) {
      if (friend.status && friend.status.created_at) {
        const ONE_YEAR = subMonths(new Date(), 12);
        // const ONE_MONTH = subMonths(new Date(), 1);
        // const ONE_WEEK = subWeeks(new Date(), 1);
        const TWEET_TIME = new Date(friend.status.created_at).getTime();

        if (isBefore(TWEET_TIME, ONE_YEAR)) {
          INACTIVE_FRIENDS.push(friend);
        }
      }
    }
  }

  const TIMEFRAME = "year";

  return (
    <div className="Following">
      <p className="Following__intro">
        You're following {INACTIVE_FRIENDS.length} accounts that haven't been
        active in the last {TIMEFRAME}. What would you want to do next?
      </p>
      <div>
        <Button label="Unfollow all" />
        <Button label="Skip this Step" />
        <Button label="Cancel" />
      </div>
      <Filter />
      {INACTIVE_FRIENDS && INACTIVE_FRIENDS.length
        ? INACTIVE_FRIENDS.map((friend, i) => <Friend data={friend} key={i} />)
        : null}
    </div>
  );
};

export default hot(Following);
