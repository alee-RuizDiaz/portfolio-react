import './AboutContent.css'
import React from 'react'
import about from '../../image/about.png'
import { Link } from 'react-router-dom'
import SkillsContent from '../SkillsContent/SkillsContent'

function AboutContent() {
  return (
    <div className='about'>
        <div className='aboutInf'>
            <div className='left'>
                <h1>¿Quién <span style={{color: '#C770F0'}}>soy?</span></h1>
                <p className='my-3'>
                    Soy un Desarrollador web frontend y me apaciona el mundo de la tecnología. Me gusta afrontar desafios e incorporar nuevos conocimientos.
                    Considero que en cada uno de mis trabajos, demuestro que disfruto y amo lo que hago. 
                </p>
                <Link to={'/contact'} className='button px-5 py-2'>Contacto</Link>
            </div>
            <div className='right mt-lg-0 mt-3'>
                <div className='imgContainer'>
                    <div className='imgStack top'>
                        <img src={about} className='img' alt='true'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='about'>
            <div className='left1'>
                <h1>Mis <span className='skill'>Habilidades</span></h1>
            </div>
            <div>
                <SkillsContent/>
            </div>
        </div> 
    </div>
  )
}

export default AboutContent