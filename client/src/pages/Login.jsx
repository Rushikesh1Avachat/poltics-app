// src/pages/Login.jsx
import { useState } from 'react'
import LoginModal from '../components/LoginModal'

function Login() {
  const [showModal, setShowModal] = useState(true)

  return <>{showModal && <LoginModal onClose={() => setShowModal(false)} />}</>
}

export default Login




