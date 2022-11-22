import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav>
        <span onClick={() => navigate('/')}>Home</span>
        <span onClick={() => navigate('/About')}>About</span>
        <span onClick={() => navigate('/projects')}>Projects</span>
    </nav>
  )
}

export default Navbar