import React from "react";

import "./index.scss";

type Props = {
  label: string,
  values: $ReadOnlyArray<string>,
  id: string,
  onChange: Function,
};

/**
 * @function Select
 * @param {Object} props
 * @param {string} props.label
 * @param {string} props.id
 * @param {Function} props.onChange
 * @returns React.Node
 * @exports Select
 */

const Select = (props: Props): React.Node => {
  const { label, id, values, onChange } = props;
  return (
    <div className="Select">
      <label className="Select__label" htmlFor={id}>
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
export default Select;
