import React from "react";

import { useLocation } from "@reach/router";
import { hot } from "react-hot-loader/root";

import difference from "lodash/difference";

import { Following, Header, Loading } from "components";
import { getAccessToken, getFriendsInfo, getTokenAndVerifier } from "utils";

import type { Friend } from "definitions";

import "./styles.scss";

type Props = {
  access: {
    key: string;
    secret: string;
  };
  friends: {
    data: Array<Friend>;
    ids: Array<number>;
  };
  path: string;
  user: {
    id: number;
  };
  username: string;
};

/**
 * @function Dashboard
 * @param {Object} props
 * @returns JSX.Element
 * @exports Dashboard
 */

const Dashboard = (props: Props): JSX.Element => {
  const { access, friends, user, username } = props;

  const location = useLocation(); // to allow useLocation() in useEffect()

  React.useEffect(() => {
    const SEARCH_PARAMS = new URLSearchParams(location.search);
    const { token, verifier } = getTokenAndVerifier(SEARCH_PARAMS);
    // access token
    if (token && verifier && !username) {
      getAccessToken(token, verifier).catch((error: Error) =>
        console.log(error)
      );
    }
    // friends information
    if (friends.data && !friends.data.length) {
      getFriendsInfo(username, friends.ids).catch((error: Error) =>
        console.log(error)
      );
    }
  }, [friends.data, friends.ids, location, username]);

  const renderComponent = () => {
    switch (true) {
      case !friends?.data.length:
        return <Loading />;
      default:
        // ids that are from inactive/suspended accounts and don't return any
        // information, extract to getSuspended()
        const suspended = difference(
          friends.ids,
          friends.data.map((item: Friend) => item.id)
        );
        return (
          <Following
            access={access}
            friends={friends.data}
            suspended={suspended}
            user={user}
          />
        );
    }
  };

  return (
    <div className="Dashboard">
      <Header />
      {renderComponent()}
    </div>
  );
};

export default hot(Dashboard);
