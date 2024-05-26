import React from 'react'
import Blueprints from '../assets/blueprints.png'
import '../styles/Welcome.css'
import VideoTest from '../assets/agilistMP4.mp4'

const Welcome = () => {
  return (
    <div id='about' className='container_welcome'>
        <div className='part1_welcome'>
            <div className='text1_welcome'>
                <p className='title_welcome'>ABOUT THE GAME</p>
                <p className='desc_welcome'>Exciting world of business and product development awaits you!<br/><br/><br/>Whether you’re a seasoned strategist or a newcomer to the realm of business, you are embarking on this thrilling learning journey.</p>
            </div>
            <video className='video' controls>
                <source src={VideoTest} type='video/mp4'/>
            </video>
        </div>

        <div className='part2_welcome'>
            <img src={Blueprints}/>
            <div className='text2_welcome'>
                <p className='title_welcome'>GOAL OF THE GAME</p>
                <p className='desc_welcome'>The primary goal of the game is to be the player with the highest Profit at the end of the last iteration. Maximum duration of the game is 20 iterations.<br/><br/><br/>Agilist players will compete in product development, team management, testing their decision-making skills, strategic planning, and adaptability along the way.</p>
            </div>
        </div>
    </div>
  )
}

export default Welcome