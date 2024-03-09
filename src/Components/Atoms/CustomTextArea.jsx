import React from 'react';
import './Atoms.css';

const CustomTextArea = ({ className, onChange, ...props }) => {


    return (
        <textarea
            className={`custom-textarea ${className || ''}`}
            onChange={onChange}
            {...props}
        />
    );
}

export default CustomTextArea;


/* const [textValue, setTextValue] = useState('');

const handleTextAreaChange = (value) => {
  // Gestisci il valore modificato della textarea
  setTextValue(value);
};

return (
  <div>
    <CustomTextArea
      className="my-custom-textarea"
      onChange={handleTextAreaChange}
      value={textValue}
    />
    <p>Testo inserito: {textValue}</p>
  </div>
); */
