import './WorkCard.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

function WorkCard(props) {
  return (
    <div className='projectCard project-card-view'>
        <img src={props.img} alt='project'/>
        <h2 className='projectTitle'>{props.title}</h2>
        <div className='proDetails'>
            <p>{props.description}</p>
            <div className='proButtons'>
                <NavLink to={props.deploy} className='button'>Deploy</NavLink>
                <NavLink to={props.repositorio} className='button'>Repositorio</NavLink>
            </div>
        </div>
    </div>
  )
}

export default WorkCard