import React from 'react';
import './SectionMolecules.css';
import SecondAi from '../../../Layout/Assets/Second-intro.jpg'
import CustomImage from '../../Atoms/CustomImage';


const SecondImageSection = () => {
    return (
        <div className='container-image-first-section'>
            <CustomImage src={SecondAi} className='imageAi1' />
        </div>
    )
}

export default SecondImageSection
