// @flow

import * as React from "react";
import { hot } from "react-hot-loader/root";

import "./index.scss";

type Props = {
  id: string,
  label: string,
  values: $ReadOnlyArray<string>,
  onChange: Function,
};

/**
 * @function Select
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.label
 * @param {string} props.id
 * @param {boolean} props.showLabel
 * @param {Function} props.onChange
 * @returns React.Node
 * @exports Select
 */

const Select = (props: Props): React.Node => {
  const { label, id, values, onChange, showLabel } = props;
  const labelClass = showLabel ? "Select__label" : "Select__label--hidden";
  return (
    <div className="Select">
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <select
        className="Select__select"
        id={id}
        onChange={({ target: { value } }) => onChange(value)}
      >
        {values.map(({ id, value, label }) => (
          <option className="Select__option" key={id} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default hot(Select);
