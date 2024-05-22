import React from 'react'
import '../styles/ExperienceCard.css'

const ExperienceCard = ({desc,image,name,profesion}) => {
  return (
    <div className='container_expCard'>
        <div className='stuff_expCard'>
            <p className='desc_expCard'>{desc}</p>
            <div className='person_expCard'>
              <img src={image}/>
              <p className='info_expCard'><strong>{name}</strong><br/>{profesion}</p>
            </div>
        </div>
    </div>
  )
}

export default ExperienceCard