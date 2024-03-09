import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SignUpForm from '../../Molecules/SignUpMolecules/SignUpForm';
import IntroSignUp from '../../Molecules/SignUpMolecules/IntroSignUp';
import './signUp.css'


const SignUp = () => {
  return (
    <Container className='container-signUp'>
            <Row >
            <Col lg={6} md={6} sm={6}>
                    <IntroSignUp />
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <SignUpForm />
                </Col>
            </Row>
        </Container>
  )
}

export default SignUp;
