import React from 'react'
import AboutContent from '../components/AboutContent/AboutContent'
import HeroImage from '../components/HeroImage/HeroImage'


const About = () => {
  return (
    <div>
      <HeroImage  heading='SOBRE MI.' text='Soy un desarrollador Web' estilos='aboutHeading'/>
      <AboutContent/>
    </div>
  )
}

export default About