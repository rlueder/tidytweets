// @flow

import React, { Fragment } from "react";

import "./styles.scss";

type Props = {
  children?: React.Node,
  disabled: boolean,
  label: string,
  onClick: Function,
};

/**
 * @function Button
 * @param {React.Node} [children]
 * @param {boolean} disabled
 * @param {string} label
 * @param {string} type
 * @param {Funcion} onClick
 * @returns React.Node
 */

const Button = (props: Props): React.Node => {
  const { children, disabled, label, type, onClick } = props;

  let className;
  switch (true) {
    case disabled:
      className = "Button--disabled";
      break;
    case type === "secondary":
      className = "Button--secondary";
      break;
    case type === "small":
      className = "Button--small";
      break;
    default:
      className = "Button";
  }

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={(e) => (disabled ? null : onClick(e))}
    >
      <Fragment>
        {children}
        {label}
      </Fragment>
    </button>
  );
};

export default Button;
