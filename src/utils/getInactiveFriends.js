// @flow

import { isBefore, subMonths, subWeeks } from "date-fns";

/**
 * @function getInactiveFriends
 * @summary Returns an array of FRIENDS based on the last time they have tweeted determined by INTERVAL and timestamp.
 * @param {Array<Object>} FRIENDS
 * @param {string} INTERVAL
 * @returns {Array<string>} inactiveFriends
 * @exports getInactiveFriends
 */

const getInactiveFriends = (
  FRIENDS: [
    {
      id: number,
      status: {
        created_at: string,
      },
    }
  ],
  INTERVAL: string
) => {
  let timestamp: Date = new Date();
  switch (INTERVAL) {
    case "week":
      timestamp = subWeeks(new Date(), 1);
      break;
    case "2 weeks":
      timestamp = subWeeks(new Date(), 2);
      break;
    case "month":
      timestamp = subMonths(new Date(), 1);
      break;
    case "3 months":
      timestamp = subMonths(new Date(), 3);
      break;
    case "6 months":
      timestamp = subMonths(new Date(), 6);
      break;
    case "year":
      timestamp = subMonths(new Date(), 12);
      break;
    default:
    // no default
  }

  let inactiveFriends = [];

  if (FRIENDS && FRIENDS.length) {
    for (let friend of FRIENDS) {
      if (friend.status && friend.status.created_at) {
        const TWEET_TIME = new Date(friend.status.created_at).getTime();
        if (isBefore(TWEET_TIME, timestamp)) {
          inactiveFriends.push(friend);
        }
      }
    }
  }
  return inactiveFriends;
};

export default getInactiveFriends;
