import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselQuestion from '../../Molecules/SurveyMolecules/CarouselQuestion';
import './FormCompanyData.css';


const QuestionCompany = () => {
    return (
        <Container fluid className='container-carousel-question'>
            <Row>
                <Col lg={12} md={12} sm={12} className='p-0'>
                   <CarouselQuestion/> 
                </Col>
            </Row>
        </Container>
    )
}

export default QuestionCompany
