// @flow

import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import remove from "lodash.remove";

import { useCountUp } from "react-countup";
import { hot } from "react-hot-loader/root";

import { Button } from "../../index";
import { Friend } from "./index";

import { cycleTimeframes, getInactiveFriends } from "../../../utils";

type Props = {
  friends: Array<number>,
  username: string,
};

/**
 * @function Following
 * @returns React.Node
 * @exports Following
 */

// TODO https://github.com/glennreyes/react-countup

const Following = (props: Props) => {
  const { friends } = props;

  const [timeframe, setTimeframe] = useState("week");
  const [inactive, setInactive] = useState(
    getInactiveFriends(friends, timeframe)
  );
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setInactive(getInactiveFriends(friends, timeframe));
  }, [friends, timeframe]);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div className="Following">
      <div className="Following__intro">
        <p>
          You're following
          <span className="Following__total">{inactive.length}</span> accounts
          that have not been active in the last
          <span
            className="Following__timeframe"
            onClick={() => cycleTimeframes(timeframe, setTimeframe)}
          >
            {timeframe}
          </span>
          <FontAwesomeIcon color="#fff" icon={faCalendarAlt} size="xs" />
        </p>
        <p>What would you want to do next?</p>
        <div className="Following__actions">
          <Button
            disabled={selected.length ? false : true}
            label="Unfollow Selected"
            onClick={() => console.log(selected)}
          />
          <Button
            label="Unfollow All"
            onClick={() =>
              console.log(
                `Are you sure you want to unfollow ${inactive.length} accounts?`
              )
            }
          />
        </div>
      </div>
      <div className="Following__list">
        {inactive && inactive.length
          ? inactive.map((friend, i) => (
              <Friend
                data={friend}
                key={i}
                selected={selected.includes(friend.id) ? true : false}
                onClick={(id) => {
                  setSelected(
                    !selected.includes(id) ? selected.concat(id) : selected
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
