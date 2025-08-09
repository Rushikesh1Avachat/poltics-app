import React, { useState } from 'react';
import Banner from './Banner';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import sanjaySarogi from '../assets/sanjaysaraogi.jpg';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleOpenLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const handleOpenRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleCloseLogin = () => setIsLoginOpen(false);
  const handleCloseRegister = () => setIsRegisterOpen(false);

  return (
    <>
      <nav className="w-full bg-white shadow-md px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={sanjaySarogi} 
              alt="Sanjay Sarogi" 
              className="w-12 h-12 rounded-full object-cover border-2 border-orange-700"
            />
            <h1 className="text-orange-700 font-semibold text-xl">
              Sanjay Sarogi
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a className="text-gray-700 hover:text-orange-700 font-medium">Home</a>
            <a className="text-gray-700 hover:text-orange-700 font-medium">About</a>
            <a className="text-gray-700 hover:text-orange-700 font-medium">Gallery</a>
            <a className="text-gray-700 hover:text-orange-700 font-medium">Achievements</a>
            <a className="text-gray-700 hover:text-orange-700 font-medium">Send Message</a>

            {/* Login Trigger */}
            <button
              onClick={handleOpenLogin}
              className="text-gray-700 hover:text-orange-700 font-medium"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={handleCloseLogin}
        onSwitchToRegister={handleOpenRegister}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={handleCloseRegister}
        onSwitchToLogin={handleOpenLogin}
      />

      <Banner />
    </>
  );
};

export default Navbar;

