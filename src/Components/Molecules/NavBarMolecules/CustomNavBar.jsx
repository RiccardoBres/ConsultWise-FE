import { useState } from 'react';
import './CustomNav.css';
import { useNavigate } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import CustomButton from '../../Atoms/CustomButton';
import CustomParagraph from '../../Atoms/CustomParagraph';
import ModalLogin from '../LoginMolecules/ModalLogin';
import { useSession } from '../../../Middleware/ProtectedRoutes';
import Logo from '../../../Layout/Assets/Logo.png';
import CustomImage from '../../Atoms/CustomImage';
import { logoutUser, isUserAuthenticated } from '../../../States/LoginState';
import { useDispatch, useSelector } from 'react-redux';

const CustomNavBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const session = useSession();
    const isAuth = useSelector(isUserAuthenticated)

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser());
            navigate('/');
        } catch (error) {
            console.error("Error during logout:", error);
        }
    }
    const handleClose = () => setShow(false);
    const handleLogin = () => { setShow(true) };
    const handleSignUp = () => { navigate('/sign-up') }
    const handleDashboard = () => { navigate('/main-dashboard') }

    return (
        <>
            <Navbar expand="lg" className="custom-nav">
                <Container className='bg-navbar align-items-center'>
                    <Navbar.Brand href="/" className="logo-container">
                        <CustomImage src={Logo} className='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav-links ml-auto">
                            <div className='container-links'>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="about">About us</Nav.Link>
                            </div>
                            <div className='container-nav-buttons'>
                                {!session.isAuthenticated && <CustomParagraph text='Log in' className='medium-p login-button' onClick={handleLogin} />}
                                {!session.isAuthenticated && <CustomButton text='Sign up' className='empty-button' onClick={handleSignUp} />}
                                {session.isAuthenticated && <CustomButton text='Dashboard' className='button' onClick={handleDashboard} />}
                                {session.isAuthenticated && <CustomButton text='Logout' className='empty-button' onClick={handleLogout} />}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ModalLogin show={show} onClose={handleClose} />
        </>
    );

}

export default CustomNavBar;
