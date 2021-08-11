/* eslint-disable array-callback-return */

import React, { useEffect, useState } from "react";

import { hot } from "react-hot-loader/root";
import { FormattedMessage } from "react-intl";

import difference from "lodash/difference";

import { Button, Friend } from "components";
// import type { Friend as FriendType } from "definitions";

import {
  cycleTimeframes,
  getInactiveFriends,
  postMultiFriendshipsDestroy,
} from "utils";

type Props = {
  access: {
    key: string;
    secret: string;
  };
  friends: [
    {
      id: number;
      status: {
        created_at: string;
      };
    }
  ];
  suspended: Object;
  user: {
    id: number;
  };
};

/**
 * @function Following
 * @param {Object} props
 * @returns JSX.Element
 * @exports Following
 */

const Following = (props: Props) => {
  const {
    access,
    friends,
    // suspended,
    user,
  } = props;

  const [timeframe, setTimeframe] = useState("week");

  const [inactive, setInactive] = useState(
    getInactiveFriends(friends, timeframe)
  );

  const [selected, setSelected] = useState<Array<number>>([]);

  useEffect(() => {
    setInactive(getInactiveFriends(friends, timeframe));
    setSelected([]);
  }, [friends, timeframe]);

  const getConfirmMessage = (total: number): string =>
    `Are you sure you want to unfollow ${total} accounts?`;

  return (
    <div className="Following">
      <div className="Following__header">
        <div className="Following__intro">
          <p>
            <FormattedMessage
              id="Following.intro"
              values={{
                total: (
                  <span className="Following__total">{inactive.length}</span>
                ),
              }}
            />
            <span
              className="Following__timeframe"
              onClick={() => {
                setSelected([]); // clear selections
                cycleTimeframes(timeframe, setTimeframe);
              }}
            >
              {timeframe}
              <span className="material-icons">calendar_today</span>
            </span>
          </p>
        </div>
        {inactive.length ? (
          <div className="Following__actions">
            <FormattedMessage id="Following.actions" />
            <div className="Following__buttons">
              <Button
                disabled={!!selected.length}
                label={<FormattedMessage id="Following.unfollow--selected" />}
                onClick={() => {
                  postMultiFriendshipsDestroy(access, selected).catch(
                    (error: Error) => console.log(error)
                  );
                  setSelected([]); // clear selections
                }}
              />
              <Button
                label={<FormattedMessage id="Following.unfollow--all" />}
                onClick={() => {
                  if (window.confirm(getConfirmMessage(inactive.length))) {
                    postMultiFriendshipsDestroy(
                      access,
                      inactive.map((item) => item.id)
                    ).then();
                    setSelected([]);
                  }
                }}
              />
            </div>
          </div>
        ) : (
          <div className="Following__actions" />
        )}
        {/* ) : suspended.length ? (
          <React.Fragment>
            <p>
              We also found
              <span className="Following__total">{suspended.length}</span>{" "}
              accounts that are inactive or suspended.
            </p>
            <div className="Following__actions">
              <Button
                label="Unfollow All"
                onClick={() => {
                  if (window.confirm(getConfirmMessage(suspended.length))) {
                    postMultiFriendshipsDestroy(access, suspended);
                  }
                }}
              />
            </div>
          </React.Fragment>
        ) : null} */}
      </div>
      <div className="Following__list">
        {inactive && inactive.length ? (
          inactive.map((friend) => {
            if (user.id !== friend.id) {
              return (
                <Friend
                  access={access}
                  data={friend}
                  key={friend.id}
                  selected={selected.includes(friend.id)}
                  onClick={(id: number) => {
                    setSelected(
                      !selected.includes(id)
                        ? selected.concat(id)
                        : difference(selected, [id])
                    );
                  }}
                />
              );
            }
          })
        ) : (
          <div className="Following__list--empty">
            <div className="Following__icon--broom">
              <span className="material-icons">check</span>
            </div>
            <p>
              <FormattedMessage id="Following.empty__paragraph--1" />
            </p>
            <p>
              <FormattedMessage id="Following.empty__paragraph--2" />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default hot(Following);
