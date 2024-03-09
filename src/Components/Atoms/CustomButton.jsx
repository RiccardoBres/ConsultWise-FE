import React from 'react';
import './Atoms.css';

const CustomButton = ({ text, onClick, className, type }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {text}
    </button>
  );
}

export default CustomButton;

{/*
 <CustomButton text="Clicca Qui" onClick={handleClick} className="custom-button-primary" />
 */}