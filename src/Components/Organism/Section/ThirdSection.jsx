import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardThirdSection from '../../Molecules/ThirdSectionMolecules/CardThirdSection';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import './Section.css'

const ThirdSection = () => {
  return (
    <Container className='container-third-section'>
        <CustomTitle text='Why should you try our service?' className='big-title'/>
        <CustomParagraph text='our key point:' className='medium-p mb-5'/>
        <Row>
            <Col lg={12} md={12} sm={12}>
                <CardThirdSection/>
            </Col>
        </Row>
    </Container>
  )
}

export default ThirdSection
