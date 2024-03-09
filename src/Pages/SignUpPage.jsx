import React from 'react';
import CustomNavBar from '../Components/Molecules/NavBarMolecules/CustomNavBar';
import SignUp from '../Components/Organism/SignUp/SignUp'; 
import Footer from '../Components/Organism/Footer/Footer'

const LoginPage = () => {
  return (
    <>
      <CustomNavBar />
      <SignUp />
      <Footer/>
    </>
  )
}

export default LoginPage
