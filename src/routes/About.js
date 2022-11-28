import React from 'react'
import AboutContent from '../components/AboutContent/AboutContent'
import Footer from '../components/Footer/Footer'
import HeroImage from '../components/HeroImage/HeroImage'


const About = () => {
  return (
    <div>
      <HeroImage  heading='SOBRE MI.' text='Presentación y Habilidades' estilos='aboutHeading'/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About