import React from 'react'
import HeroImage from '../components/HeroImage/HeroImage.js'
import Work from '../components/Work/Work.js'
import Footer from '../components/Footer/Footer.js'

const Project = () => {
  return (
    <div>
      <HeroImage heading='PROYECTOS.' text='Algunos de mis trabajos' estilos='heading'/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project