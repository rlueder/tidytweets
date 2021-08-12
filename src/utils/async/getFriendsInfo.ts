import { chunk as getChunks } from "lodash";

import { mutate } from "store";
import { usersLookup } from "utils";

import type { State } from "definitions";

/**
 * @async
 * @name getFriendsInfo
 * @type {Function}
 * @summary Fires a promise for chunks of 50 ids writing data to state.friends.data
 * @see {@link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup}
 * @param {string} username
 * @param {Array<number>} ids
 * @returns {Object} response
 */

const getFriendsInfo = async (username: string, ids: Array<number>) => {
  let promises: Array<Promise<Object>> = [];

  const chunks = getChunks(ids, 50);

  for (const chunk of chunks) {
    // @ts-ignore
    promises.push(usersLookup(username, chunk.join(",")));
  }

  try {
    const response = await Promise.all(promises);
    if (response.length) {
      mutate(
        (draft: {
          friends: {
            data: Object;
          };
        }) => {
          draft.friends.data = response.flat();
        }
      );
    }
    return response;
  } catch (error: any) {
    mutate((draft) => {
      draft.friends.error = error;
    });
  }
};

export default getFriendsInfo;
