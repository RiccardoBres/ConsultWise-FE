import React from 'react';
import FormSurvey from '../../Molecules/SurveyMolecules/Form/FormSurvey';
import {Container, Col, Row} from 'react-bootstrap';
import './FormCompanyData.css'


const Questions = () => {
  return (
   <Container className='container-question'>
    <Row>
        <Col lg={12} md={12} sm={12} >
           <FormSurvey/>
        </Col>
    </Row>
   </Container> 
  )
}

export default Questions;
