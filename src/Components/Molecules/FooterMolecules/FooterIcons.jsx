import React from 'react';
import './FooterMolecules.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import CustomParagraph from '../../Atoms/CustomParagraph';

const FooterIcons = () => {
  return (
    <div className="container-social-icons-footer">
      <div className="footer-icons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
      <CustomParagraph text="© 2023 Developed & Designed | Riccardo Bresolin" className="medium-p m-0" />
    </div>
  );
};

export default FooterIcons;
