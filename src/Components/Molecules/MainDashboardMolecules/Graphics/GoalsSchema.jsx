// Improved GoalsSchema.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import CustomParagraph from '../../../Atoms/CustomParagraph';
import CustomTitle from '../../../Atoms/CustomTitle';
import { selectCompany } from '../../../../States/CompanyState';
import './GoalsSchema.css';

const renderList = (items) => (
  items.length > 0 ? (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : (
    <p>No items available.</p>
  )
);

const GoalsSchema = () => {
  const company = useSelector(selectCompany);

  return (
    <div className="goals-schema-container">
      <CustomTitle text="Strategic Goals and Key Challenges" className="medium-title" />
      <CustomParagraph
        text="Discover the strategic goals and key challenges that shape the vision and mission of the company. Gain insights into the aspirations and obstacles encountered on the organization's path to success."
        className="intro-paragraph"
      />
      <div className="goals-list-container">
        <div>
          <CustomTitle text="Strategic Goals" className="small-title" />
          {renderList(company[0]?.specificCompanyInfo.strategicGoals || [])}
        </div>
        <div>
          <CustomTitle text="Key Challenges" className="small-title" />
          {renderList(company[0]?.specificCompanyInfo.keyChallenges || [])}
        </div>
      </div>
    </div>
  );
};

export default GoalsSchema;
