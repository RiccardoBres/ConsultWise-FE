import React from 'react';
import './FooterMolecules.css';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomImage from '../../Atoms/CustomImage';
import Logo from '../../../Layout/Assets/Logo.png';

const FooterInformation = () => {
  return (
    <>
      <div className="container-footer">
        <div className='d-flex flex-column'>
          <CustomTitle text="Consult Wise" className="medium-title" />
          <CustomParagraph text="Smart consulting service" className="medium-p" />
        </div>
        <div className='info-footer'>
          <CustomTitle text="Consult-Teams" className="small-title" />
          <CustomTitle text="Sales Faq" className="small-title" />
          <CustomTitle text="Submit a ticket" className="small-title" />
        </div>
        <div className='info-footer'>
          <CustomTitle text="Service" className="small-title" />
          <CustomTitle text="Theme Tweak" className="small-title" />
        </div>
        <div className='info-footer'>
          <CustomTitle text="Show Case" className="small-title" />
          <CustomTitle text="Widgetkit" className="small-title" />
          <CustomTitle text="Support" className="small-title" />

        </div>
        <div className='info-footer'>
          <CustomTitle text="About Us" className="small-title" />
          <CustomTitle text="Contact Us" className="small-title" />
          <CustomTitle text="Affiliate" className="small-title" />
          <CustomTitle text="Resources" className="small-title" />
        </div>
      </div>
    </>
  );
};

export default FooterInformation;
