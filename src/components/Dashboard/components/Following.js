// @flow
import React, { useEffect, useState, useRef } from "react";
// import Select from "../../Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom } from "@fortawesome/free-solid-svg-icons";
import { TIMEFRAMES } from "../../../constants";
import difference from "lodash/difference";
import Select from "react-select";

// import { useCountUp } from "react-countup";
import { hot } from "react-hot-loader/root";

import { Button } from "../../index";
import { Friend } from "./index";

import {
  cycleTimeframes,
  getInactiveFriends,
  postMultiFriendshipsDestroy,
} from "../../../utils";

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

  const [selectTop, setSelectTop] = useState("0px");
  const [selectLeft, setSelectLeft] = useState("0px");
  const followingTitleRef = useRef(null);
  const selectStyles = {
    option: (provided, state) => {
      const background = state.isFocused ? "hsl(198, 76%, 57%)" : "#fff";
      const color = state.isFocused ? "#fff" : "#000";

      return {
        ...provided,
        color,
        fontSize: "16px",
        background,
      };
    },
    control: (provided, state) => ({
      ...provided,
      position: "absolute",
      border: "none",
      top: selectTop,
      left: selectLeft,
      borderBottom: "2px solid hsl(198, 76%, 57%)",
      borderRadius: "0",
      background: "transparent",
      marginLeft: "0.5rem",
      width: "180px",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return {
        ...provided,
        opacity,
        transition,
        fontSize: "28px",
        color: "hsl(198, 76%, 57%)",
      };
    },
  };

  useEffect(() => {
    setInactive(getInactiveFriends(friends, timeframe));
    setSelected([]);
  }, [friends, timeframe]);

  useEffect(() => {
    const setTopLeft = () => {
      const after = window.getComputedStyle(
        followingTitleRef.current,
        ":after"
      );
      setSelectLeft(`${after.left.toString()}`);
      setSelectTop(`${after.top.toString()}`);
    };
    setTopLeft();
    window.addEventListener("resize", setTopLeft);
    return () => {
      window.removeEventListener("resize", setTopLeft, true);
    };
  }, []);

  const getConfirmMessage = (TOTAL) =>
    `Are you sure you want to unfollow ${TOTAL} accounts?`;

  return (
    <div className="Following">
      <div className="Following__header">
        <div className="Following__intro">
          <p className="Following__title" ref={followingTitleRef}>
            You're following
            <span className="Following__total">{inactive.length}</span> accounts
            that have not been active in the last
          </p>
          <Select
            defaultValue={TIMEFRAMES[0]}
            isSearchable={false}
            styles={selectStyles}
            id="timeFrameSelect"
            label="Set timeframe"
            options={TIMEFRAMES}
            onChange={({ value }) => setTimeframe(value)}
          />
        </div>
        {inactive.length ? (
          <div className="Following__actions">
            <p>What would you want to do next?</p>
            <div className="Following__buttons">
              <Button
                disabled={selected.length ? false : true}
                label="Unfollow Selected"
                onClick={() => {
                  postMultiFriendshipsDestroy(access, selected);
                  setSelected([]); // clear selections
                }}
              />
              <Button
                label="Unfollow All"
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
            <p>Looks tidy already!</p>
            <p>Try a different time frame above.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default hot(Following);
