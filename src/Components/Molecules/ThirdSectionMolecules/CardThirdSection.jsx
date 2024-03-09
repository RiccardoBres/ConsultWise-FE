import React from 'react';
import './CardThirdSection.css';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FaStar } from 'react-icons/fa';
const CardComponent = ({ title, description, className }) => {
    return (
        <div className={`card card-component ${className}`}>
            <CardContent>
                <CustomTitle text={title} className='card-title' gutterBottom /> {/* Applica gutterBottom direttamente qui */}
                <CustomParagraph text={description} className='card-description' />
                <FaStar className='star-icon'/>
            </CardContent>
        </div>
    );
};

const CardThirdSection = () => {
    return (
        <div className='container-card'>
            <CustomParagraph text='' className='small-title' />
            <CustomTitle text='' className='small-title' />
            <div className="pb-5">
                <div className="card-container">
                    <CardComponent
                        title="Intuitive"
                        description="Our website utilizes artificial intelligence to provide precise and personalized consultations."
                    />
                    <CardComponent
                        title="Reliable"
                        description="In contrast to other services, our website employs secure and reliable algorithms."
                    />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <CardComponent
                        title="Customized"
                        description="Our website offers personalized consultations for each individual company, ensuring a unique and customized approach."
                    />
                </div>
            </div>
        </div>
    );
}

export default CardThirdSection;
