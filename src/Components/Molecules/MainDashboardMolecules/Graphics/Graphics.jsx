import React from 'react';
import BubbleChart from './BubbleChart';
import WalletChart from './WalletChart';
import { Col } from 'react-bootstrap'
import CustomTitle from '../../../Atoms/CustomTitle';
import CustomParagraph from '../../../Atoms/CustomParagraph';
import './Graphics.css';

const Graphics = () => {
    return (
        <>
            <div className="pb-5">
                <div className="container-intro-graphics">
                    <CustomTitle text="Metrics" className="medium-title" />
                </div>
                <Col lg={12} md={12} sm={12} xs={12} className='graphics-col'>
                    <WalletChart />
                </Col>
                <Col lg={12} md={12} sm={12} xs={12} className='graphics-col'>
                    <BubbleChart />
                </Col>
            </div>
        </>
    );
};

export default Graphics;
