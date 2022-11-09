import './VideoHome.css'
import coverVideo from '../../media/coverVideo.mp4'
import React from 'react'
import { Link } from 'react-router-dom'

function VideoHome() {
  return (
    <div className='content'>
        <div className='mask'>
            <video className='video' src={coverVideo} autoPlay loop muted/>
        </div>
        <div className='textContent'>
            <p>Alejandro Ruiz Diaz</p>
            <h1>React Developer.</h1>
            <div className='mt-4'>
            <Link className='btn-neon mx-3' to={'/about'}>
                <span className="span1"></span>
                <span className="span2"></span>
                <span className="span3"></span>
                <span className="span4"></span>
                Sobre Mi
            </Link>
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