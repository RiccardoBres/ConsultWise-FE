import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../../Atoms/CustomButton';
import CustomParagraph from '../../../Atoms/CustomParagraph';
import { userId } from '../../../../States/LoginState';
import GeneralInformation from './GeneralInformation';
import SpecificCompanyInformation from './SpecificCompanyInformation';
import { createCompany, selectIsCompanyLoading, selectCompanyError } from '../../../../States/CompanyState';
import '../SurveyMolecules.css';

const FormSurvey = () => {
  const navigate = useNavigate(); 
  const userSession = useSelector(userId);
  const dispatch = useDispatch();
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const isLoading = useSelector(selectIsCompanyLoading);
  const error = useSelector(selectCompanyError);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      specificCompanyInfo: {
        ...data.specificCompanyInfo,
        keyChallenges: data.specificCompanyInfo.keyChallenges.split(',').map(challenge => challenge.trim()),
        strategicGoals: data.specificCompanyInfo.strategicGoals.split(',').map(goal => goal.trim())
      },
      user: userSession
    };

    dispatch(createCompany({ data: formattedData, navigate })); 
  };

  const handleResetForm = () => {
    reset();
    setFormSubmitted(false);
  };

  return (
    <form className='form-survey' onSubmit={handleSubmit(onSubmit)}>
    <GeneralInformation register={register} errors={errors} />
    <SpecificCompanyInformation register={register} />

    {isLoading && <CustomParagraph text='Loading...' />}
    {error === true && <CustomParagraph text='Error compiling form. Please try again' />}

    <div className="d-flex">
      <CustomButton type="submit" text="Submit" className="button mx-1" />
      <CustomButton type="button" text="Reset Form" onClick={handleResetForm} className="empty-button mx-1" />
    </div>
  </form>
  );
};

export default FormSurvey;
