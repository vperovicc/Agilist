import React from 'react'
import '../styles/Counter.css'

const Counter = () => {
  return (
    <div className='container_counter'>
        <div className='seperate_counter'>
            <p className='text_counter'>
            Workshop and Trainings Held
            </p>
            <p className='number_counter'>10+</p>
        </div>

        <div className='seperate_counter'>
            <p className='text_counter'>
            Attendees
            </p>
            <p className='number_counter'>50+</p>
        </div>

        <div className='seperate_counter'>
            <p className='text_counter'>
            Certifications Issued
            </p>
            <p className='number_counter'>15+</p>
        </div>
    </div>
  )
}

export default Counter