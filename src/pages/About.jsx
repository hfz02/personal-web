import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import me from '../assets/me.svg'
// import { useNavigate } from 'react-router-dom'

const About = () => {
//   const navigate = useNavigate()
    
  return (
    <>
        {/* Navbar */}
        <Navbar />

        <div id='about'>
            <section>
                {/* Left */}
                <div className="about-left">
                    <img src={me} alt="profile" />
                </div>

                {/* Right */}
                <div className="about-right">
                    <h1>A little About Me</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo temporibus itaque voluptate sunt a autem! Cum facilis deserunt necessitatibus, 
                        explicabo ea illo sit quod suscipit vitae libero voluptatum blanditiis cupiditate 
                        tenetur sunt eaque rem nesciunt in ad! Asperiores, voluptatem voluptate. Nulla omnis laboriosam asperiores. Qui sunt ab eius possimus vitae.
                    </p>
                </div>
            </section>
        </div>

        {/* Footer */}
        <Footer />
    </>
  )
}

export default About