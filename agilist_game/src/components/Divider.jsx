import React from 'react'
import '../styles/Divider.css'

const Divider = ({title}) => {
  return (
    <div className='container_divider'>
        <p>{title}</p>
        <div className='line_divider'/>
    </div>
  )
}

export default Divider