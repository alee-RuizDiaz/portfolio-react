import './VideoHome.css'
import coverVideo from '../../media/coverVideo.mp4'
import React from 'react'
import AlejandroCv from '../../assets/AlejandroCv.pdf'
import { Link } from 'react-router-dom'

function VideoHome() {
  return (
    <div className='content'>
        <div className='mask'>
            <video className='video' src={coverVideo} autoPlay loop muted/>
        </div>
        <div className='textContent animate-bg'>
            <p>
                ¡Hola!
            <span className='wave ms-2' role={'img'}>
                👋🏻
            </span>
            </p>
            <p>
                Soy Alejandro Ruiz Diaz
            </p>
            <h1>React Developer.</h1>
            <div className='mt-4'>
            <a className='btn-neon mx-3' download='' href={AlejandroCv}>
                <span className="span1"></span>
                <span className="span2"></span>
                <span className="span3"></span>
                <span className="span4"></span>
                Descargar CV
            </a>
            <Link className='btn-neon' to={'/project'}>
                <span className="span1"></span>
                <span className="span2"></span>
                <span className="span3"></span>
                <span className="span4"></span>
                Proyectos
            </Link>
        </div>
        </div>
    </div>
  )
}

export default VideoHome