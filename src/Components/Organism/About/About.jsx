import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomImage from '../../Atoms/CustomImage';
import aboutImage from '../../../Layout/Assets/about.bg.jpg'
import Contact from '../../Organism/Contact/Contact'
import './About.css';

const About = () => {
    return (
        <Container fluid className='container-about mt-5'>
            <Row className="mt-5 align-items-center justify-content-center">
                <CustomTitle text="About Us" className="medium-title mb-5 text-center" />
                <Col md={12} className='d-flex aling-items-center justify-content-center'>
                    <CustomParagraph className='medium-p w-50 text-center' text="Our mission is to revolutionize the way businesses approach problem-solving and decision-making by integrating AI-driven insights into their strategies. We aim to be the catalyst for positive change, driving sustainable growth and innovation across industries. We truly believe in the power of AI to transform the world for the better." />
                </Col>
            </Row>
            <Row>
                <Col lg={12} md={12} className='d-flex align-items-center justify-content-center ' >
                    <div className='container-desci-about'>
                        <CustomTitle text="Our Mission" className="medium-title" />
                        <CustomParagraph className="w-50" text="ConsultWise was born out of a collective passion for leveraging cutting-edge technology to drive meaningful change in the business landscape. Our journey began in 2020 when a group of AI enthusiasts and seasoned business professionals came together with a shared vision: to harness the power of artificial intelligence to revolutionize the way businesses operate.Our founders, each bringing unique expertise and experience to the table, recognized the immense potential of AI to transform traditional business models and empower organizations to achieve greater efficiency, innovation, and success. Fuelled by this vision, ConsultWise was established with a clear mission: to provide top-notch consultancy services that leverage AI-driven insights to help businesses navigate the complexities of the modern market and unlock their full potential." />
                        <div>
                            <CustomImage src={aboutImage} className='about-image' />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mb-5 pb-5">
                <Col lg={12} md={12} className="d-flex align-self-center justify-content-center flex-column">
                    <CustomTitle text="Why Choose Us?" className="medium-title my-5 text-center" />
                    <div className="why-choose-us">
                        <div className="why-choose-item">
                            <CustomTitle text='Expertise' className='small-title' />
                            <CustomParagraph text="Our team consists of seasoned professionals with extensive experience in AI research and development, ensuring top-notch consultancy services." className="medium-p" />
                        </div>
                        <div className="why-choose-item">
                            <CustomTitle text='Innovation' className='small-title' />
                            <CustomParagraph text="We stay ahead of the curve by embracing emerging technologies and methodologies, enabling us to deliver innovative solutions tailored to your unique needs." className="medium-p" />
                        </div>
                        <div className="why-choose-item">
                            <CustomTitle text='Results-Driven' className='small-title' />
                            <CustomParagraph text="We are committed to delivering tangible results that drive tangible business outcomes, helping you achieve your goals effectively and efficiently." className="medium-p" />
                        </div>
                        <div className="why-choose-item">
                            <CustomTitle text='Collaboration' className='small-title' />
                            <CustomParagraph text="We believe in the power of collaboration and work closely with our clients to understand their challenges and develop customized AI solutions that address their specific needs." className="medium-p" />
                        </div>
                    </div>
                </Col>
            </Row>
                <Contact />
        </Container>
    );
};

export default About;
