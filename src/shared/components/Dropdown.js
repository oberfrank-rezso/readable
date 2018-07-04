import React from 'react';

const Dropdown = ({
  onChange: handleChange, value, options, name, required = false,
}) => (
  <select
    className="dropdown"
    name={name}
    value={value}
    onChange={handleChange}
    required={required}
  >{options.map(option => (
    <option
      key={`option-${option.name}`}
      value={option.value}
      disabled={option.disabled === true}
    >{option.name}
    </option>
  ))}
  </select>
);

export default Dropdown;
