import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import FooterIcons from '../../Molecules/FooterMolecules/FooterIcons'
import FooterInformation from '../../Molecules/FooterMolecules/FooterInformation'
const Footer = () => {
  return (
    <footer className='footer'>
                <FooterInformation/>
                <FooterIcons/> 
    </footer>
  )
}

export default Footer
