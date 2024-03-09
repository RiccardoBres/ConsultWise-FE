import React from 'react';
import CustomParagraph from '../../Atoms/CustomParagraph';
import './SectionMolecules.css'
import CustomTitle from '../../Atoms/CustomTitle';
import CustomButton from '../../Atoms/CustomButton';

const SecondIntroSection = () => {
    const innovationParagraph = "Unlock new possibilities for your business with our revolutionary AI-driven insights. The era of leveraging artificial intelligence for everyday decision-making is here. Our platform empowers you to gather crucial data, monitor key performance indicators, and receive AI-generated insights for unparalleled business guidance. It's time to revolutionize the way you approach innovation and propel your business forward.";

    return (
        <div className='container-first-intro-section'>
            <div className="container-second-intro">
                <CustomParagraph text='Unlock new possibilities' className='small-p' />
                <CustomTitle text='Revolutionizing Business Insights' className='medium-title' />
                <CustomParagraph text={innovationParagraph} className='medium-p' />
            </div>
        </div>
    )
}

export default SecondIntroSection;
