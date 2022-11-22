import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
        <div id='home'>
            <section>
                {/* Left */}
                <div className="home-left">
                    <h1>Hafizh</h1>
                    <h4>Front End Developer</h4>
                </div>

                {/* Right */}
                <div className="home-right">
                    <h1 onClick={() => navigate('/about')} className='one'>About</h1>
                    <h1 onClick={() => navigate('/projects')} className='two'>Projects</h1>
                </div>
            </section>
        </div>
        <Footer />
    </>
  )
}

export default Home