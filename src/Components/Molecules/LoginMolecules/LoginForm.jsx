import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { loginUser, loginError, isUserAuthenticated, isLoginLoading } from '../../../States/LoginState';
import CustomButton from '../../Atoms/CustomButton';
import './LoginMolecules.css';
import { useNavigate } from 'react-router-dom';
import CustomParagraph from '../../Atoms/CustomParagraph';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const error = useSelector(loginError);
  const [formError, setFormError] = useState('')
  const isLoading = useSelector(isLoginLoading)
  const isAuthenticated = useSelector((state) => isUserAuthenticated(state));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
  
    if (form.checkValidity() === false) {
      setFormErrors({
        emailError: form.email.validationMessage,
        passwordError: form.password.validationMessage,
      });
      return;
    }
  
    try {
      await dispatch(loginUser({
        email: formData.email,
        password: formData.password,
      })); 
      navigate('/main-dashboard');
    } catch (error) {
      setFormError('Login Failed, please try again')
    }
  };



  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="form-control"
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })}
            required
          />
          <Form.Control.Feedback type="invalid">{formErrors.emailError}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="form-label">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className="form-control"
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })}
            required
          />
          <Form.Control.Feedback type="invalid">{formErrors.passwordError}</Form.Control.Feedback>
        </Form.Group>
        <CustomButton type='submit' text={isLoading ? 'Loading...' : 'Submit'} className='empty-button' />
        {error ? <CustomParagraph text={formError} className='text-danger' /> : null}
      </Form>
    </div>
  );
};

export default LoginForm;
