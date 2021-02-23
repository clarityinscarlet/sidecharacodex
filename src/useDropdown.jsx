import React, { useState } from 'react';

const useDropdown = (label, options) => {
  const [state, setState] = useState('');

  const fixReturnValue = value => (value === '--' ? '' : value);

  const Dropdown = () => (
    <label htmlFor={label}>
      <select
        className={label}
        id={label}
        value={state}
        onChange={e => setState(fixReturnValue(e.target.value))}
        onBlur={e => setState(fixReturnValue(e.target.value))}
        disabled={!options.length}
      >
        <option>--</option>
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
