import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import './Contact.css';

const Contact = () => {
    return (
        <Container className='container-contact'>
            <Row className='contact-info'>
                <Col lg={6} md={12} sm={12}>
                        <div className='d-flex align-items-center flex-column'>
                            <CustomTitle text="Contacts" className="big-title mb-5" />
                            <CustomParagraph className='medium-p' text="Reach out to us to learn more about our AI consultancy services and how we can help your business thrive in the digital era. Whether you have questions, inquiries, or collaboration opportunities, we are here to assist you." />
                        </div>
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <div className="contact-info-list">
                    <CustomTitle text="Get in touch" className="big-title mb-5" />
                        <div>
                            <FaEnvelope className="contact-icon" />
                            <CustomParagraph text="info@ai-consultancy.com" className="contact-text" />
                        </div>
                        <div>
                            <FaMapMarkerAlt className="contact-icon" />
                            <CustomParagraph text="123 AI Street, New York, NY 10001, USA" className="contact-text" />
                        </div>
                        <div>
                            <FaPhone className="contact-icon" />
                            <CustomParagraph text="+1 (123) 456-7890" className="contact-text" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default Contact;
