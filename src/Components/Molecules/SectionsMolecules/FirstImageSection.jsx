import React from 'react';
import './SectionMolecules.css';
import ImageAI from '../../../Layout/Assets/First-Intro-Section.jpg';
import CustomImage from '../../Atoms/CustomImage';
import { useInView } from 'react-intersection-observer';

const FirstImageSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const imageClasses = inView ? 'imageAi animation-active' : 'imageAi';

    return (
        <div className='container-image-first-section' ref={ref}>
            <CustomImage src={ImageAI} className={imageClasses} />
        </div>
    );
};

export default FirstImageSection;
