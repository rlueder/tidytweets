import { isBefore, subMonths, subWeeks } from "date-fns";

import { TIMEFRAMES } from "../constants";
import type { Friend } from "definitions";

/**
 * @name getInactiveFriends
 * @type {Function}
 * @summary Returns an array of friends based on the last time they have tweeted determined by timeframe and timestamp.
 * @param {Array<Friend>} friends
 * @param {string} timeframe
 * @returns {Array<string>} inactiveFriends
 */

const getInactiveFriends = (friends: Array<Friend>, timeframe: string) => {
  let timestamp: Date = new Date();

  switch (timeframe) {
    case TIMEFRAMES[0]:
      timestamp = subWeeks(new Date(), 1);
      break;
    case TIMEFRAMES[1]:
      timestamp = subWeeks(new Date(), 2);
      break;
    case TIMEFRAMES[2]:
      timestamp = subMonths(new Date(), 1);
      break;
    case TIMEFRAMES[3]:
      timestamp = subMonths(new Date(), 3);
      break;
    case TIMEFRAMES[4]:
      timestamp = subMonths(new Date(), 6);
      break;
    case TIMEFRAMES[5]:
      timestamp = subMonths(new Date(), 12);
      break;
    default:
    // no default
  }

  let inactiveFriends: Array<Friend> = [];

  if (friends?.length) {
    for (let friend of friends) {
      if (friend.status?.created_at) {
        const tweetTime = new Date(friend.status.created_at).getTime();
        if (isBefore(tweetTime, timestamp)) {
          inactiveFriends.push(friend);
        }
      }
    }
  }
  return inactiveFriends;
};

export default getInactiveFriends;
