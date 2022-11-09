import './HeroImage.css'

import React from 'react'

function HeroImage({heading, text}) {
  return (
    <div className='heroImg'>
        <div className='heading'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default HeroImage