import { isBefore, subMonths, subWeeks } from "date-fns";

import type { Friend } from "definitions";

/**
 * @function getInactiveFriends
 * @summary Returns an array of friends based on the last time they have tweeted determined by timeframe and timestamp.
 * @param {Array<Friend>} friends
 * @param {string} timeframe
 * @returns {Array<string>} inactiveFriends
 */

const getInactiveFriends = (friends: Array<Friend>, timeframe: string) => {
  let timestamp: Date = new Date();

  switch (timeframe) {
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

  let inactiveFriends: Array<Friend> = [];

  if (friends?.length) {
    for (let friend of friends) {
      if (friend.status?.created_at) {
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
