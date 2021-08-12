// import { mutate } from "../store";

import type { State } from "definitions";

/**
 * @async
 * @name verifyCredentials
 * @type {Function}
 */

const verifyCredentials = async () => {
  fetch("/.netlify/functions/twitter-client?endpoint=verify_credentials")
    .then((response) => response.json())
    .then((data: State) => {
      console.log(data);
      //   mutate((draft) => {
      //     draft.session = data;
      //   });
    });
};

export default verifyCredentials;
