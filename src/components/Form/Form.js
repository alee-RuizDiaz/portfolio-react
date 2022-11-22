import './Form.css'
import React from 'react'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"

function Form() {

  const navigate = useNavigate()

  const sendEmail = (event) => {
      event.preventDefault()
      emailjs.sendForm('service_gam4xk6', 'template_kx6gasa', event.target, '8CvBxDHi3xgKmWNP7')
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Su Mensaje fue enviado correctamente',
          showConfirmButton: false,
          timer: 2000
        })
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocurrio un error al enviar el mensaje',
        })
      })

      setTimeout(() => {
          navigate('/')
      }, 2000)
  }


  return (
    <form className='form' onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type='text' name='user_name'/>
        <label>Email</label>
        <input type='text' name='user_email'/>
        <label>Mensaje</label>
        <textarea rows={6} placeholder='Escribe tu mensaje' name='user_message'/>
        <button className='button py-2' style={{color: 'white'}}>Enviar</button>
    </form>
  )
}

export default Form