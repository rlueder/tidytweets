// @flow

import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import difference from "lodash/difference";

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
};

/**
 * @function Following
 * @returns React.Node
 * @exports Following
 */

// TODO https://github.com/glennreyes/react-countup

const Following = (props: Props) => {
  const { access, friends } = props;

  const [timeframe, setTimeframe] = useState("3 months");

  const [inactive, setInactive] = useState(
    getInactiveFriends(friends, timeframe)
  );

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setInactive(getInactiveFriends(friends, timeframe));
    setSelected([]);
  }, [friends, timeframe]);

  return (
    <div className="Following">
      <div className="Following__intro">
        <p>
          You're following
          <span className="Following__total">{inactive.length}</span> accounts
          that have not been active in the last
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
        <p>What would you want to do next?</p>
        <div className="Following__actions">
          <Button
            disabled={selected.length ? false : true}
            label="Unfollow Selected"
            onClick={() => {
              postMultiFriendshipsDestroy(access, selected);
              setSelected([]); // clear selections
            }}
          />
          <Button
            disabled
            label="Unfollow All"
            onClick={() => {
              console.log(
                `Are you sure you want to unfollow ${inactive.length} accounts?`
              );
              // on confirm fire below, else return null
              // postMultiFriendshipsDestroy(inactive.map((item) => item.id), selected);
              // setSelected([]);
            }}
          />
        </div>
      </div>
      <div className="Following__list">
        {inactive && inactive.length
          ? inactive.map((friend, i) => (
              <Friend
                access={access}
                data={friend}
                key={i}
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
          : null}
      </div>
    </div>
  );
};

export default hot(Following);
