import React from 'react';
import './Atoms.css'; 

const CustomChat = ({ className, response, ...props }) => {
  return (
    <div className={`custom-chat ${className || ''}`} {...props}>
      <p>{response}</p>
    </div>
  );
}

export default CustomChat;


