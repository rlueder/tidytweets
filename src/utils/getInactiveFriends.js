// @flow

import { isBefore, subMonths, subWeeks } from "date-fns";

/**
 * @function getInactiveFriends
 * @param {Array<string>} FRIENDS
 * @param {string} INTERVAL
 * @returns {Array<string>} INACTIVE_FRIENDS
 */

const getInactiveFriends = (FRIENDS: Array<string>, INTERVAL: string) => {
  let TIMESTAMP;
  switch (INTERVAL) {
    case "week":
      TIMESTAMP = subWeeks(new Date(), 1);
      break;
    case "2 weeks":
      TIMESTAMP = subWeeks(new Date(), 2);
      break;
    case "month":
      TIMESTAMP = subMonths(new Date(), 1);
      break;
    case "3 months":
      TIMESTAMP = subMonths(new Date(), 3);
      break;
    case "6 months":
      TIMESTAMP = subMonths(new Date(), 6);
      break;
    case "year":
      TIMESTAMP = subMonths(new Date(), 12);
      break;
    default:
    // no default
  }

  let INACTIVE_FRIENDS = [];

  if (FRIENDS && FRIENDS.length) {
    for (let friend of FRIENDS) {
      if (friend.status && friend.status.created_at) {
        const TWEET_TIME = new Date(friend.status.created_at).getTime();
        if (isBefore(TWEET_TIME, TIMESTAMP)) {
          INACTIVE_FRIENDS.push(friend);
        }
      }
    }
  }
  return INACTIVE_FRIENDS;
};

export default getInactiveFriends;
