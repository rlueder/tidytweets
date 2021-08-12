import React from "react";

import { FormattedMessage } from "react-intl";

import { Button } from "components";
import type { Friend as FriendType } from "definitions";
import { postFriendshipsDestroy } from "utils";

type Props = {
  access: {
    key: string;
    secret: string;
  };
  data: FriendType;
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
  const {
    access,
    data: {
      description,
      id,
      id_str,
      name,
      profile_image_url_https,
      screen_name,
    },
    selected,
    onClick,
  } = props;

  return (
    <div className="Friend" onClick={() => onClick(id)}>
      <div>
        <div
          className={selected ? "Friend__avatar--selected" : "Friend__avatar"}
        >
          <img alt={`${name}'s twitter avatar`} src={profile_image_url_https} />
          {selected && (
            <div className="Friend__icon">
              <span className="material-icons">check</span>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="Friend__id">
          <h1>{name}</h1>
          <h2>@{screen_name}</h2>
        </div>
        <div className="Friend__description">
          <p>{description}</p>
        </div>
      </div>
      <Button
        label={<FormattedMessage id="Friend.unfollow" />}
        onClick={(e: MouseEvent) => {
          e.stopPropagation();
          postFriendshipsDestroy(access, id_str).catch((error: Error) =>
            console.log(error)
          );
        }}
      />
    </div>
  );
};

export default Friend;
