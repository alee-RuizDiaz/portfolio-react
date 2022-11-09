
import WorkCard from '../WorkCard/WorkCard'
import WorkCardData from '../WorkCardData/WorkCardData'
import React from 'react'

function Work() {
  return (
    <div className='workContainer mt-5'>
        <div className='projectContainer'>
            {WorkCardData.map((val, ind) => {
                return (
                    <WorkCard 
                    key={ind}
                    img={val.img}
                    title={val.title}
                    description={val.description}
                    deploy={val.deploy}
                    repositorio={val.repositorio}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work