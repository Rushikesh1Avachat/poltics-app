import React, { useState } from 'react';
import RegisterModal from '../components/RegisterModal';


const RegisterPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default RegisterPage;

