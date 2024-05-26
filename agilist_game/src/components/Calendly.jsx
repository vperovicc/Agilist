import React from 'react'
import '../styles/Calendly.css'
import {InlineWidget} from 'react-calendly'

const Calendly = () => {
  return (
    
    <div id='call' className='container_calendly'>
      <InlineWidget url='https://calendly.com/nikola-y-bh/15min?hide_gdpr_banner=1&text_color=2b3747&primary_color=f58132' />
    </div>
  )
}

export default Calendly