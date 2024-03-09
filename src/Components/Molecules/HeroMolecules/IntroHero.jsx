import React from 'react';
import './HeroMolecules.css';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomButton from '../../Atoms/CustomButton';
import { useNavigate } from 'react-router-dom';

const IntroHero = () => {
    const navigate = useNavigate();
    const handleMain =()=>{
        navigate('main-dashboard')
    }
    return (
        <div className='container-intro-hero'>
            <CustomParagraph text='Powered with OpenAI' className='small-p' />
            <CustomTitle text='The best way to improve your company.' className='big-title' />
            <CustomParagraph text='Use this web application to discover what you can improve about your company' className='medium-p' />
            <div className="container-buttons-intro-hero">
                <CustomButton text='Try for free' className='button' onClick={handleMain}/>
            </div>
        </div>
    )
}

export default IntroHero
