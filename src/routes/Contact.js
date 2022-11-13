import React from 'react'
import HeroImg from '../components/HeroImage/HeroImage.js'
import Form from '../components/Form/Form'

const Contact = () => {
  return (
    <div>  
      <HeroImg estilos={'contactHeading'} heading='CONTACTO.' text='¡Escríbeme!'/>
      <Form/>
    </div>
  )
}

export default Contact