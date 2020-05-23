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
        <div className="Friend__description">
          <p>{data.description}</p>
        </div>
      </div>
      <Button
        label="Unfollow"
        onClick={() => console.log(`Unfollow ${data.screen_name}`)}
      />
    </div>
  );
};

export default Friend;
