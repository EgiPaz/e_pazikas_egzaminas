import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import Form from '../Form/Form';
import {
  StyledModalLeft,
  StyledModalRight,
  StyledModalWrapper,
  StyledOverlay,
} from './Modal.style';

const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <>
      <StyledOverlay onClick={onClose}></StyledOverlay>
      <StyledModalWrapper>
        <StyledModalLeft>
          <div className="leftWrapper">
            <img
              src="https://svgshare.com/i/_go.svg"
              alt=""
              className="logoImage"
            />
            <div className="imageContainer">
              <img
                src="https://svgshare.com/i/_gZ.svg%27%20title=%27illustration"
                alt=""
              />
            </div>
            <p>Start for free & Get Attractive offers Today !</p>
          </div>
        </StyledModalLeft>
        <StyledModalRight>
          <div className="getStarted">
            <h2>Get Started</h2>
            <p>Already have an account?</p>
            <a href="#">Log In</a>
          </div>
          <div className="socialButtons">
            <Button
              text="sign up"
              theme={'google'}
              icon={<i class="fa-brands fa-google"></i>}
            />

            <Button
              text="sign up"
              theme={'facebook'}
              icon={<i class="fa-brands fa-facebook"></i>}
            />
          </div>
          <div className="or">
            <p>Or</p>
          </div>
          <Form />
        </StyledModalRight>
      </StyledModalWrapper>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
