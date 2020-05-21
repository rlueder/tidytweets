// @flow

import * as React from "react";

type Props = {
  label: string,
};

const Button = (props: Props) => {
  const { label } = props;
  return <button className="Button">{label}</button>;
};

export default Button;
