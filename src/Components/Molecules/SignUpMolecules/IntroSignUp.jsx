import React from 'react';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';

const IntroSignUp = () => {
    return (
        <div className='py-4'>
            <CustomTitle className='big-title' text='Welcome to Our Platform!' />
            <CustomParagraph className='medium-p' text='Thank you for choosing our platform for business consultancy services. We are excited to assist you in enhancing your company`s performance and success' />
            <CustomParagraph className='medium-p' text='After completing the registration, we kindly ask you to take a moment to fill out a questionnaire. This questionnaire is designed to gather detailed information about your company, and it plays a crucial role in providing you with the most accurate and valuable insights.' />
            <CustomParagraph className='small-p' text='It is extremely important that the questionnaire is completed thoroughly and thoughtfully. The more comprehensive your responses, the better we can understand your business needs and tailor our consultancy services to address them effectively.' />
        </div>
    )
}

export default IntroSignUp;


