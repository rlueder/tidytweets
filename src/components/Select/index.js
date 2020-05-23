// @flow

import React, { useState } from "react";

import "./styles.scss";

type Props = {
  options: Array<string>,
};

const Select = (props: Props) => {
  const [active, setActive] = useState(false);
  const { options } = props;
  return (
    <div
      className="Select"
      style={{ overflow: active ? "initial" : "hidden" }}
      onClick={() => setActive(!active)}
    >
      <ul>
        {options && options.map((option, i) => <li key={i}>{option}</li>)}
      </ul>
    </div>
  );
};

export default Select;
