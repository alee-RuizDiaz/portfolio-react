import React from 'react'
import HeroImage from '../components/HeroImage/HeroImage.js'
import NavBar from '../components/NavBar/NavBar.js'
import Work from '../components/Work/Work.js'

const Project = () => {
  return (
    <div>
      <NavBar/>
      <HeroImage heading='PROYECTOS.' text='Algunos de mis trabajos'/>
      <Work/>
    </div>
  )
}

export default Project