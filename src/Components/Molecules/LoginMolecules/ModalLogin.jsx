import CustomButton from '../../Atoms/CustomButton';
import Modal from 'react-bootstrap/Modal';
import LoginForm from './LoginForm';
import { useNavigate } from'react-router-dom';
import CustomParagraph from '../../Atoms/CustomParagraph';
import './LoginMolecules.css';

const ModalLogin = ({ show, handleLoginSuccess, onClose }) => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate('/sign-up');
    console.log(process.env.REACT_APP_SERVER_BASE_URL);

  }
  return (
    <Modal show={show} onHide={onClose} className="modal-container">
      <Modal.Header closeButton>
        <Modal.Title className="modal-title">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">{show && <LoginForm />}</Modal.Body>
      <Modal.Footer className="modal-footer">
      <CustomParagraph text={"Don't have an account?"} className="text-link" onClick={handleSignUp}/>
        <CustomButton onClick={onClose} text="Close" className="empty-button" />
      </Modal.Footer>
    </Modal>
  );
};

export default ModalLogin;

