import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <>
        {/* Navbar */}
        <Navbar />

        <div id='projects'>
            <section>
                <div class="card">
                    <h3>Ecommerce</h3>
                    <p>Qui mollitia distinctio nam placeat.</p>
                    <a href="https://app-cart.herokuapp.com/" target='_blank' rel='noreferrer'>See Project</a>
                </div>
                <div class="card">
                    <h3>Home Page</h3>
                    <p>Eum vel fugit, exercitationem obcaecati delectus nulla.</p>
                    <a href="https://hfz02.github.io/Transisi-Test/" target='_blank' rel='noreferrer'>See Project</a>
                </div>
            </section>
        </div>

        {/* Footer */}
        <Footer />
    </>
  )
}

export default Projects