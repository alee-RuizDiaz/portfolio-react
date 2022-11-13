import './Form.css'
import React from 'react'

function Form() {
  return (
    <div className='form'>
        <label>Nombre</label>
        <input type='text'/>
        <label>Email</label>
        <input type='text'/>
        <label>Asunto</label>
        <input type='text'/>
        <label>Mensaje</label>
        <textarea rows={6} placeholder='Escribe tu mensaje'/>
        <button className='buttonContact'>Enviar</button>
    </div>
  )
}

export default Form