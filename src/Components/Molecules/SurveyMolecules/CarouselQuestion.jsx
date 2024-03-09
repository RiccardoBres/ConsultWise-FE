import React, { useEffect, useState } from 'react';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomTextArea from '../../Atoms/CustomTextArea';
import CustomButton from '../../Atoms/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { addResponse, selectResponses, addAdditionalInfo, getCompany, selectCompany } from '../../../States/CompanyState';
import './SurveyMolecules.css';
import questionData from './questionData';
import { useNavigate } from 'react-router-dom';

const CarouselQuestion = () => {
    const [responses, setResponses] = useState(Array(questionData.length).fill(''));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const company = useSelector(selectCompany);

    const handleSaveResponse = (index, response) => {
        const newResponses = [...responses];
        newResponses[index] = response;
        setResponses(newResponses);
    };
    
    const handleFinalSubmit = async () => {
        await dispatch(addAdditionalInfo({ companyId: company[0]._id, additionalInfo: responses }));
        navigate('/main-dashboard');
    };
    useEffect(() => {
        dispatch(getCompany());
    }, []);

    return (
        <div className="container-questions">
            {questionData.map((question, index) => (
                <div key={question.id} className="question-container">
                    <CustomTitle text={question.title} className="medium-title" />
                    <CustomParagraph text={question.description} className="medium-p w-50" />
                    <CustomTextArea
                        value={responses[index]}
                        onChange={(e) => handleSaveResponse(index, e.target.value)}
                    />
                </div>
            ))}
            <CustomButton text='Submit' className='empty-button' onClick={handleFinalSubmit} />
        </div>
    );
};

export default CarouselQuestion;
