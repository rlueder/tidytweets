// @flow

import * as React from "react";

import "./styles.scss";

type Props = {
  disabled: boolean,
  label: string,
  onClick: Function,
};

/**
 * @function Button
 * @param {boolean} disabled
 * @param {string} label
 * @param {Funcion} onClick
 * @returns React.Node
 */

const Button = (props: Props): React.Node => {
  const { disabled, label, onClick } = props;
  return (
    <button
      className={disabled ? "Button--disabled" : "Button"}
      onClick={(e) => (disabled ? null : onClick(e))}
    >
      {label}
    </button>
  );
};

export default Button;
