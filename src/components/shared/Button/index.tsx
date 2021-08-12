import React from "react";

import "./styles.scss";

type Props = {
  children?: React.ReactChildren;
  disabled?: boolean;
  label: string | JSX.Element;
  type?: string;
  onClick: Function;
};

/**
 * @function Button
 * @param {Object} props
 * @returns JSX.Element
 */

const Button = (props: Props): JSX.Element => {
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
      <>
        {children}
        {label}
      </>
    </button>
  );
};

export default Button;
