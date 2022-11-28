import React from 'react'
import HeroImg from '../components/HeroImage/HeroImage.js'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer.js'

const Contact = () => {
  return (
    <div>  
      <HeroImg estilos={'contactHeading'} heading='CONTACTO.' text='¡Escríbeme!'/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact