import React from 'react';
import './Section.css'
import { Container, Row, Col } from 'react-bootstrap';
import FirstIntroSection from '../../Molecules/SectionsMolecules/FirstIntroSection';
import FirstImageSection from '../../Molecules/SectionsMolecules/FirstImageSection';
const FirstSection = () => {
    return (
        <>
            <Container className='container-section'>
                <Row>
                    <Col lg={8} md={6} sm={6} className='col-image'>
                        <FirstImageSection />
                    </Col>
                    <Col lg={4} md={6} sm={6}>
                        <FirstIntroSection />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FirstSection
