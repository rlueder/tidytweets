import React from "react";

import { FormattedMessage } from "react-intl";

import { Button } from "components";
import { postFriendshipsDestroy } from "utils";

type Props = {
  access: {
    key: string;
    secret: string;
  };
  data: {
    description: string;
    id: number;
    id_str: string;
    name: string;
    profile_image_url_https: string;
    screen_name: string;
  };
  selected: boolean;
  onClick: Function;
};

/**
 * @function Friend
 * @param {Object} props
 * @returns JSX.Element
 * @exports Friend
 */

const Friend = (props: Props) => {
  // console.log("Friend", props);

  const { access, data, selected, onClick } = props;
  return (
    <div className="Friend" onClick={() => onClick(data.id)}>
      <div>
        <div
          className={selected ? "Friend__avatar--selected" : "Friend__avatar"}
        >
          <img
            alt={`${data.name}'s twitter avatar`}
            src={data.profile_image_url_https}
          />
          {selected && (
            <div className="Friend__icon">
              <span className="material-icons">check</span>
            </div>
          )}
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
        label={<FormattedMessage id="Friend.unfollow" />}
        onClick={(e: MouseEvent) => {
          e.stopPropagation();
          postFriendshipsDestroy(access, data.id_str)
            .then()
            .catch((error: Error) => console.log(error));
        }}
      />
    </div>
  );
};

export default Friend;
