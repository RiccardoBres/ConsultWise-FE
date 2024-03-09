import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../../Atoms/CustomButton';
import { selectCompany, getCompany } from '../../../../States/CompanyState';
import { getOpenAIResponse, isOpenAiResponseLoading, selectOpenAiError , selectOpenAiResponse} from '../../../../States/OpenAiState';
import CustomParagraph from '../../../Atoms/CustomParagraph';
import CustomTitle from '../../../Atoms/CustomTitle';
import CircularProgress from '@mui/material/CircularProgress'; // Importa lo spinner di caricamento
import './OpenAiMolecules.css';

const OpenAiResponse = () => {
  const dispatch = useDispatch();
  const company = useSelector(selectCompany);
  const isLoadingOpenAIResponse = useSelector(isOpenAiResponseLoading);
  const openAiError = useSelector(selectOpenAiError);
  const openAIResponse = useSelector(selectOpenAiResponse);

  useEffect(() => {
    dispatch(getCompany()); 
  }, []);

  useEffect(() => {
    if (company.length > 0) { 
      if (company[0].consultResult == null) { 
        dispatch(getOpenAIResponse(company, company[0]._id));
      }
    }
  }, [company]);

  return (
    <div className='container-open-ai-response'>
      <CustomTitle text='Your Consultant Service with Our AI!' className='large-title' />
      {isLoadingOpenAIResponse || openAiError && (
        <CircularProgress /> 
      )}
      {!isLoadingOpenAIResponse && !openAiError && (
        <div className="container-response">
          <>
            <CustomTitle text={company[0]?.companyName} className='small-title' />
            <CustomParagraph text={company[0]?.consultResult} className='medium-p' />
          </>
        </div>
      )}
    </div>
  );
}

export default OpenAiResponse;
