import React from 'react';
import './Atoms.css';

const CustomInput = ({ className, onChange, placeholder,type, value, ...props }) => {
  

  return (
    <input
      className={`custom-input ${className || ''}`}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
      type={type}
      value={value}
      {...props}
    />
  );
};

export default CustomInput;
