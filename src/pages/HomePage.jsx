import { useState } from 'react';

import { StyledHomePage } from './HomePage.style';

import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';

const HomePage = () => {
  // State
  const [isOpen, setIsOpen] = useState(false);

  // Functions
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <StyledHomePage>
        <Button text="Sign Up" action={openModal} />
      </StyledHomePage>
      {isOpen && <Modal onClose={closeModal}></Modal>}
    </>
  );
};

export default HomePage;
