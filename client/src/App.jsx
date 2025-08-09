
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <>
    <Navbar/>
   <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* Any other components should be rendered within a Route's element prop */}
    </Routes>

    <Footer/>
    </>
  );
}

export default App;




