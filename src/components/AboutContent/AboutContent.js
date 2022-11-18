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
                <h1>¿Quién soy?</h1>
                <p>
                Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.
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