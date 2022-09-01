import React, { useState, useEffect, useRef } from 'react';
import Button from '../Button/Button';
import { StyledForm } from './Form.style';
import FormInput from './FormInput/FormInput';

const Form = () => {
  // State
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [formValidationsMessages, setFormValidationsMessages] = useState({
    name: '',
    password: '',
    email: '',
  });

  // Refs
  const nameInputRef = useRef();
  const passwordInputRef = useRef();
  const emailInputRef = useRef();
  const initialSubmit = useRef(true);

  // Side Effects
  useEffect(() => {
    if (!initialSubmit.current) {
      validateInputs(name, email, password);
    }
  }, [name, email, password]);

  const validateInputs = (name, email, password) => {
    let isNameValid;
    let isPasswordValid;
    let isEmailValid;

    if (!name.includes(' ')) {
      nameInputRef.current.style.borderColor = 'red';

      isNameValid = false;
    } else {
      nameInputRef.current.style.borderColor = 'green';
      isNameValid = true;
    }

    if (password.length < 6) {
      passwordInputRef.current.style.borderColor = 'red';
      isPasswordValid = false;
    } else {
      passwordInputRef.current.style.borderColor = 'green';
      isPasswordValid = true;
    }

    if (!email.includes('@')) {
      emailInputRef.current.style.borderColor = 'red';

      isEmailValid = false;
    } else {
      emailInputRef.current.style.borderColor = 'green';
      isEmailValid = true;
    }

    setFormValidationsMessages({
      name: isNameValid ? '' : 'Full name must include space',
      password: isPasswordValid
        ? ''
        : 'Username must be at least 6 characters length',
      email: isEmailValid ? '' : 'Email must be email and include @',
    });

    return isPasswordValid && isEmailValid && isNameValid ? true : false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isInputsValid = validateInputs(name, password, email);
    initialSubmit.current = false;

    if (!isInputsValid) {
      return;
    }

    // Other logic if inputs fields are valid....
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormInput
        name="name"
        text="Full name"
        type="text"
        id="name"
        value={name}
        change={setName}
        startIcon={<i className="fa-solid fa-user"></i>}
        ref={nameInputRef}
        helperText={formValidationsMessages.name}
      />
      <FormInput
        name="email"
        text="Email"
        type="text"
        id="email"
        value={email}
        change={setEmail}
        startIcon={<i class="fa-regular fa-envelope"></i>}
        ref={emailInputRef}
        helperText={formValidationsMessages.email}
      />
      <FormInput
        name="password"
        text="Password"
        type="password"
        id="password"
        value={password}
        change={setPassword}
        startIcon={<i class="fa-solid fa-lock"></i>}
        ref={passwordInputRef}
        helperText={formValidationsMessages.password}
      />

      <Button text="Submit" />
    </StyledForm>
  );
};

export default Form;
