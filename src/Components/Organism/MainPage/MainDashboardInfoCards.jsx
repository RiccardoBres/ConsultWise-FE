// MainDashboardInfoCards.jsx

import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaMoneyBillWave, FaCog, FaUsers, FaChartPie } from 'react-icons/fa';
import CustomTitle from '../../Atoms/CustomTitle';
import { useSession } from '../../../Middleware/ProtectedRoutes';
import CustomParagraph from '../../Atoms/CustomParagraph';
import './mainPage.css';

const MainDashboardInfoCards = () => {
    const session = useSession();
    return (
        <>
            <div className="container-intro-home">
                <CustomTitle text={`Welcome to Your Dashboard ${session.decodedSession.username}!`} className='medium-title' />
                <CustomParagraph text="Explore your company's metrics, manage your portfolio, access personalized AI consulting, and more!" className='medium-p' />
            </div>
            <Col lg={12} md={6} className='d-flex justify-content-center col-card'>
                <Card>
                    <Card.Body>
                        <div className="icon-container">
                            <FaMoneyBillWave className="info-icon" />
                        </div>
                        <CustomTitle className="small-title" text="Financial Overview" />
                        <CustomParagraph className="small-p" text="Gain insights into your company's financial health, monitor annual revenue, and analyze profit margins for strategic decision-making." />
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={6} md={6} className='col-card'>
                <Card>
                    <Card.Body>
                        <div className="icon-container">
                            <FaCog className="info-icon" />
                        </div>
                        <CustomTitle className="small-title" text="Operational Efficiency" />
                        <CustomParagraph className="small-p" text="Monitor operational efficiency by analyzing production output and understanding the relationship between efficiency metrics and employee count." />
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={6} md={6} className='col-card'>
                <Card>
                    <Card.Body>
                        <div className="icon-container">
                            <FaUsers className="info-icon" />
                        </div>
                        <CustomTitle className="small-title" text="Customer Engagement" />
                        <CustomParagraph className="small-p" text="Track customer retention rates to measure customer loyalty and understand how effectively your company retains customers over time." />
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={12} md={6} className='d-flex justify-content-center col-card pb-5'>
                <Card>
                    <Card.Body>
                        <div className="icon-container">
                            <FaChartPie className="info-icon" />
                        </div>
                        <CustomTitle className="small-title" text="Expense Distribution" />
                        <CustomParagraph className="small-p" text="Analyze expense breakdowns across categories to make informed financial decisions and optimize resource allocation." />
                    </Card.Body>
                </Card>
            </Col>
        </>


    );
};

export default MainDashboardInfoCards;
