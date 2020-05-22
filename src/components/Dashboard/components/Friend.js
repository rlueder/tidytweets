// @flow

import * as React from "react";

import { Button } from "../../index";

type Props = {
  data: Object,
};

/**
 * @function Friend
 * @returns React.Node
 */

const Friend = (props: Props) => {
  const { data } = props;

  console.log(data);

  return (
    <div className="Friend">
      <div>
        <div className="Friend__avatar">
          <img alt="Avatar" src={data.profile_image_url_https} />
        </div>
      </div>
      <div>
        <div className="Friend__id">
          <h1>{data.name}</h1>
          <h2>@{data.screen_name}</h2>
        </div>
        <div className="Friend__descrption">
          <p>{data.description}</p>
        </div>
      </div>
      <Button label="Unfollow" />
    </div>
  );
};

export default Friend;
