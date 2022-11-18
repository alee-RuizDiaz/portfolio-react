import './WorkCard.css'
import React from 'react'

function WorkCard(props) {
  return (
    <div className='projectCard project-card-view'>
        <img src={props.img} alt='project'/>
        <h2 className='projectTitle'>{props.title}</h2>
        <div className='proDetails'>
            <p>{props.description}</p>
            <div className='proButtons'>
                <a href={props.deploy} target='_blank' rel="noreferrer" className='button px-4 py-2'>Deploy</a>
                <a href={props.repositorio} target='_blank' rel="noreferrer" className='button px-4 py-2'>Repositorio</a>
            </div>
        </div>
    </div>
  )
}

export default WorkCard