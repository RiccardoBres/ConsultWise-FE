import React, { useState } from 'react';
import { Container, Row} from 'react-bootstrap';
import OpenAiResponse from '../../Molecules/MainDashboardMolecules/OpenAI/OpenAiResponse';
import SideBarDashboard from '../../Molecules/MainDashboardMolecules/SideBarDashboard';
import GoalsSchema from '../../Molecules/MainDashboardMolecules/Graphics/GoalsSchema';
import Graphics from '../../Molecules/MainDashboardMolecules/Graphics/Graphics';
import MainDashboardInfoCards from './MainDashboardInfoCards';
import CustomerRetentionChart from '../../Molecules/MainDashboardMolecules/Graphics/CustomerRetentionChart';
import './mainPage.css';
import Account from '../../Molecules/MainDashboardMolecules/AccountPolicy/Account';


const MainDashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Home');

  const renderSelectedMenuItem = () => {
    switch (selectedMenuItem) {
      case 'Home':
        return <MainDashboardInfoCards />;
      case 'Metrics':
        return <Graphics />;
      case 'Wallet':
        return <CustomerRetentionChart />;
      case 'Goals':
        return <GoalsSchema />;
      case 'Account':
        return <Account />;
      case 'Consulting':
        return <OpenAiResponse />;
      default:
        return null;
    }
  };

  return (
    <>
      <SideBarDashboard onSelectMenuItem={setSelectedMenuItem} />
      <Container className='container-main-dashboard'>
        <Row>
          {renderSelectedMenuItem()}
        </Row>
      </Container>
    </>
  );
};

export default MainDashboard;
