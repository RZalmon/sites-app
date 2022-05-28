import React from 'react';
import classes from './Select.module.css';

const Select = React.forwardRef((props, ref) => {
  return (
    <div className={classes.select}>
      <label htmlFor={props.select.id}>{props.label}</label>
      <select ref={ref}>
        {props.select.options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
});
export default Select;