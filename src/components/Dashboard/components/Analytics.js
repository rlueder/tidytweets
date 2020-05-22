// @flow

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";

type Props = {
  active: Object,
};

/**
 * @function Analytics
 * @param <Object> active
 * @returns React.Node
 * @exports Analytics
 */

const Analytics = (props: Props) => {
  const { active } = props;
  return (
    <div className="Analytics">
      {active ? (
        <div>Profile, Activity, Latest Tweet</div>
      ) : (
        <div className="Analytics--blank">
          <FontAwesomeIcon color="#999" icon={faChartBar} size="3x" />
          <div>Select a profile on the list to see more details</div>
        </div>
      )}
    </div>
  );
};

export default Analytics;
