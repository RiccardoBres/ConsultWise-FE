import React from 'react';
import './Hero.css';
import { Container, Row, Col } from 'react-bootstrap';
import IntroHero from '../../Molecules/HeroMolecules/IntroHero';
import ImageHero from '../../Molecules/HeroMolecules/ImageHero';

const Hero = () => {
    return (
        <Container className='container-hero'>
            <Row >
                <Col lg={6} md={6} sm={6}>
                    <IntroHero />
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <ImageHero />
                </Col>
            </Row>
        </Container>
    )
}

export default Hero
