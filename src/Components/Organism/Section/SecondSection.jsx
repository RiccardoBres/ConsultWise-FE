import React from 'react';
import './Section.css'
import { Container, Row, Col } from 'react-bootstrap';
import SecondImageSection from '../../Molecules/SectionsMolecules/SecondImageSection';
import SecondIntroSection from '../../Molecules/SectionsMolecules/SecondIntroSection';
const SecondSection = () => {
    return (
        <>
            <Container className='container-section-second'>
                <Row>
                    <Col lg={4} md={6} sm={6} className='col-image'>
                        <SecondIntroSection />
                    </Col>
                    <Col lg={8} md={6} sm={6}>
                        <SecondImageSection />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SecondSection