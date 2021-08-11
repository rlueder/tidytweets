// import { mutate } from "../store";

/**
 * @async
 * @function verifyCredentials
 */

const verifyCredentials = async () => {
  fetch("/.netlify/functions/twitter-client?endpoint=verify_credentials")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //   mutate((draft) => {
      //     draft.session = data;
      //   });
    });
};

export default verifyCredentials;
