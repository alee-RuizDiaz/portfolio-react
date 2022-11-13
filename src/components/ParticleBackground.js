import React from 'react'
import Particles from 'react-tsparticles'
import particlesConfing from './ParticleConfig'

export const ParticleBackground = () => {
  return (
    <div>
        <Particles params={particlesConfing}/>
    </div>
  )
}
