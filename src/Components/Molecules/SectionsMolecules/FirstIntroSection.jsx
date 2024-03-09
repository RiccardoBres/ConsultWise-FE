import React from 'react';
import CustomParagraph from '../../Atoms/CustomParagraph';
import './SectionMolecules.css'
import CustomTitle from '../../Atoms/CustomTitle';
import CustomButton from '../../Atoms/CustomButton';

const FirstIntroSection = () => {
    const innovationParagraph = "Embrace the future of business with our cutting-edge AI consultancy. Experience the power of innovation as you seamlessly integrate artificial intelligence into your daily operations. Our platform enables you to monitor your company's performance, providing data-driven insights that empower informed decision-making. Start leveraging AI's strengths to transform the way you do business.";

    return (
        <div className='container-first-intro-section'>
            <div className="container-second-intro">
                <CustomParagraph text='Empower your business with AI' className='small-p' />
                <CustomTitle text='Transformative AI Consulting' className='medium-title' />
                <CustomParagraph text={innovationParagraph} className='medium-p' />
            </div>
        </div>
    )
}

export default FirstIntroSection;
