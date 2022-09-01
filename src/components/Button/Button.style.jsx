import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  padding: 0.5em 1.5em;
  border: 1px solid #e3e3e3;
  border-radius: 5px;

  background-color: ${(props) =>
    props.theme === 'google'
      ? '#fff'
      : props.theme === 'facebook'
      ? '#4F70B5'
      : '#F2796E'};

  color: ${(props) => (props.theme === 'google' ? '#000' : '#fff')};

  display: flex;
  justify-content: center;
  align-items: center;

  > i {
    padding-right: 5px;
  }
`;
