import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateCompanyDetails } from '../../../../States/CompanyState';
import { FaEdit } from 'react-icons/fa';

const EditableField = ({ label, value, icon, companyId, fieldName }) => {
    const dispatch = useDispatch();
    const [fieldValue, setEditedValue] = useState(value);

    const handleFieldChange = (e) => {
        setEditedValue(e.target.value);
    };

    const handleSaveChanges = () => { 
        console.log(companyId, fieldName, fieldValue); 
        dispatch(updateCompanyDetails({ companyId, fieldName: fieldName, fieldValue: fieldValue }));
    };

    return (
        <Form.Group>
            <div className="d-flex align-items-center flex-column">
                <Form.Label className="mr-2">
                    {icon} {label}
                </Form.Label>
                <div className="form-control">
                    <Form.Control
                        type="text"
                        value={fieldValue}
                        onChange={handleFieldChange}
                    />
                    <FaEdit className="edit-icon" onClick={handleSaveChanges} />
                </div>
            </div>
        </Form.Group>
    );
};

export default EditableField;
