import React from 'react'
import '../styles/Calendly.css'
import {InlineWidget} from 'react-calendly'

const Calendly = () => {
  return (
    
    <div id='call' className='container_calendly'>
      <InlineWidget url='https://calendly.com/nikola-y-bh/15min?hide_gdpr_banner=1' />
    </div>
  )
}

export default Calendly