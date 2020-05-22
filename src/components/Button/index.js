// @flow

import * as React from "react";

import "./styles.scss";

type Props = {
  label: string,
  onClick: Function,
};

/**
 * @function Button
 * @param {string} label
 * @param {Funcion} onClick
 * @returns React.Node
 */

const Button = (props: Props): React.Node => {
  const { label, onClick } = props;
  return (
    <button className="Button" onClick={(e) => onClick(e)}>
      {label}
    </button>
  );
};

export default Button;
