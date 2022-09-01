import React from 'react';
import { StyledButton } from './Button.style';

const Button = ({ text, action, theme, icon }) => {
  return (
    <StyledButton onClick={action} theme={theme}>
      {icon}
      {text}
    </StyledButton>
  );
};

export default Button;
