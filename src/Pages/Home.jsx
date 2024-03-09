import React from 'react';
import Header from '../Components/Organism/Header/Header';
import Hero from '../Components/Organism/Hero/Hero';
import FirstSection from '../Components/Organism/Section/FirstSection';
import SecondSection from '../Components/Organism/Section/SecondSection';
import Footer from '../Components/Organism/Footer/Footer';
import ThirdSection from '../Components/Organism/Section/ThirdSection';


const Home = () => {
  return (
    <>
      <Header />
      <Hero/> 
      <FirstSection/>  
      <SecondSection/>
      <ThirdSection/>
      <Footer/>   
    </>
  )
}

export default Home;
