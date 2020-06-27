// @flow

import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faBroom } from "@fortawesome/free-solid-svg-icons";

import difference from "lodash/difference";

// import { useCountUp } from "react-countup";
import { hot } from "react-hot-loader/root";

import { Button, Friend } from "components";

import {
  cycleTimeframes,
  getInactiveFriends,
  postMultiFriendshipsDestroy,
} from "utils";

import { FormattedMessage } from "react-intl";

type Props = {
  access: Object,
  friends: Array<number>,
  suspended: Object,
};

/**
 * @function Following
 * @param {Object} props
 * @param {Object} props.access
 * @param {Array<number>} props.friends
 * @param {Object} props.suspended
 * @returns React.Node
 * @exports Following
 */

const Following = (props: Props) => {
  const {
    access,
    friends,
    // suspended
  } = props;

  const [timeframe, setTimeframe] = useState("week");

  const [inactive, setInactive] = useState(
    getInactiveFriends(friends, timeframe)
  );

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setInactive(getInactiveFriends(friends, timeframe));
    setSelected([]);
  }, [friends, timeframe]);

  const getConfirmMessage = (TOTAL) =>
    `Are you sure you want to unfollow ${TOTAL} accounts?`;

  return (
    <div className="Following">
      <div className="Following__header">
        <div className="Following__intro">
          <p>
          <FormattedMessage id="dashboard.following.followingIntro1"/>
            <span className="Following__total">{inactive.length}</span> 
            <FormattedMessage id="dashboard.following.followingIntro2"/>
            <span
              className="Following__timeframe"
              onClick={() => {
                setSelected([]); // clear selections
                cycleTimeframes(timeframe, setTimeframe);
              }}
            >
              {timeframe}
              <FontAwesomeIcon color="#fff" icon={faCalendarAlt} size="xs" />
            </span>
          </p>
        </div>
        {inactive.length ? (
          <div className="Following__actions">
            <FormattedMessage id="dashboard.following.followingActionText"/>
            <div className="Following__buttons">
              <Button
                disabled={selected.length ? false : true}
                label={<FormattedMessage id="dashboard.following.unfollowSelectedButton"/>}
                onClick={() => {
                  postMultiFriendshipsDestroy(access, selected);
                  setSelected([]); // clear selections
                }}
              />
              <Button
                label={<FormattedMessage id="dashboard.following.unfollowAllButton"/>}
                onClick={() => {
                  if (window.confirm(getConfirmMessage(inactive.length))) {
                    postMultiFriendshipsDestroy(
                      access,
                      inactive.map((item) => item.id)
                    );
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
          inactive.map((friend, i) => (
            <Friend
              access={access}
              data={friend}
              key={friend.id}
              selected={selected.includes(friend.id) ? true : false}
              onClick={(id) => {
                setSelected(
                  !selected.includes(id)
                    ? selected.concat(id)
                    : difference(selected, [id])
                );
              }}
            />
          ))
        ) : (
          <div className="Following__list--empty">
            <div className="Following__icon--broom">
              <FontAwesomeIcon icon={faBroom} size="2x" />
            </div>
            <p><FormattedMessage id="dashboard.following.followingListEmptyMessage1"/></p>
            <p><FormattedMessage id="dashboard.following.followingListEmptyMessage2"/></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default hot(Following);
