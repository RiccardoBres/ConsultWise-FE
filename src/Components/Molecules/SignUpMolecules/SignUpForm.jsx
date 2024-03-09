import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../../States/UserState';
import { loginUser } from '../../../States/LoginState';
import './SignUpMolecules.css';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomInput from '../../Atoms/CustomInput';
import CustomButton from '../../Atoms/CustomButton';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.userState.isLoading);
  const error = useSelector((state) => state.userState.error);
  const [formData, setFormData] = useState({});
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else if (formData.password !== passwordConfirm) {
      setFormError('Passwords do not match');
    } else {
      try {
        await dispatch(createUser({ formUserData: formData }));
        cleaner();
        await dispatch(loginUser({
          email: formData.email,
          password: formData.password,
        }));
        await navigate('/survey');
      } catch (error) {
        setFormError('Registration failed');
      }
    }
  };

  const cleaner = () => {
    setFormData({
      username: '',
      surname: '',
      email: '',
      password: '',
    });
    setPasswordConfirm('');
  };

  return (
    <div className="form-container sign-up">
      <CustomTitle text="Sign Up" className="medium-title" />
      <CustomParagraph
        text="Enter details to create a new account."
        className="medium-p"
      />
      <form onSubmit={handleSubmit}>
        <CustomInput
          name="username"
          onChange={(e) =>
            setFormData({
              ...formData,
              username: e.target.value,
            })}
          placeholder="First Name"
          className="form-control"
          required
        />
        <CustomInput
          name="surname"
          onChange={(e) =>
            setFormData({
              ...formData,
              surname: e.target.value,
            })}
          placeholder="Last Name"
          className="form-control"
          required
        />
        <CustomInput
          name="email"
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })}
          placeholder="Email"
          className="form-control"
          type="email"
          required
        />
        <CustomInput
          name="password"
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })}
          type="password"
          placeholder="Password"
          className="form-control"
          required
        />
        <CustomInput
          name="passwordConfirm"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          type="password"
          placeholder="Confirm Password"
          className="form-control"
          required
        />
        <CustomButton
          text={isLoading ? 'Signing Up...' : 'Sign Up'}
          className="form-button"
          disabled={isLoading}
          type="submit"
        />
      </form>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
    </div>
  );
};

export default SignUpForm;
