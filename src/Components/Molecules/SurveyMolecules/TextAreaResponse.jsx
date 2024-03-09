// TextAreaResponse.js
import React, { useState } from 'react';
import CustomTextArea from '../../Atoms/CustomTextArea';
import CustomButton from '../../Atoms/CustomButton';

const TextAreaResponse = ({ handleResponse, errors }) => {
    const [response, setResponse] = useState('');

    const handleNext = () => {
        handleResponse(response);
        setResponse('');
    };

    return (
        <div className='mt-5'>
            <CustomTextArea value={response} onChange={(e) => setResponse(e.target.value)} />
            {errors.response && <div style={{ color: 'red', margin: '10px' }}>{errors.response}</div>}
        </div>
    );
};

export default TextAreaResponse;
