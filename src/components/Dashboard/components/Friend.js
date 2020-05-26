// @flow

import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../../index";

import { postFriendshipsDestroy } from "../../../utils";

type Props = {
  data: Object,
  selected: boolean,
  onClick: Function,
};

/**
 * @function Friend
 * @returns React.Node
 */

const Friend = (props: Props) => {
  const { data, selected, onClick } = props;
  return (
    <div className="Friend" onClick={() => onClick(data.id)}>
      <div>
        <div
          className={selected ? "Friend__avatar--selected" : "Friend__avatar"}
        >
          {selected ? (
            <div>
              <FontAwesomeIcon color="#fff" icon={faCheck} />
            </div>
          ) : (
            <img alt="Avatar" src={data.profile_image_url_https} />
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
        label="Unfollow"
        onClick={() => {
          postFriendshipsDestroy(data.id);
        }}
      />
    </div>
  );
};

export default Friend;
