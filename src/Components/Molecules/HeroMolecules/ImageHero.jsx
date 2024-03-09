import React from 'react';
import './HeroMolecules.css';
import CustomImage from '../../Atoms/CustomImage';
import HeroImage from '../../../Layout/Assets/HeroImage.jpg'


const ImageHero = () => {
  return (
    <div className='container-image-hero'>
        <CustomImage src={HeroImage} className='w-100'/>
    </div>
  )
}

export default ImageHero
