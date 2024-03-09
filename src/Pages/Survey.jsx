import React from 'react';
import CustomNavBar from '../Components/Molecules/NavBarMolecules/CustomNavBar';
import Footer from '../Components/Organism/Footer/Footer'
import FormCompanyData from '../Components/Organism/QuestionsSurvey/FormCompanyData';


const Survey = () => {
  return (
   <>
   <CustomNavBar/>
   <FormCompanyData/>
   <Footer/>
   </>
  )
}

export default Survey;
