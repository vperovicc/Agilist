import React from 'react'
import '../styles/Objectives.css'
import Arrow from '../assets/arrow.png'
import Chess from '../assets/chess.png'
import Circle from '../assets/circle.png'
import Coins from '../assets/coins.png'
import Matrix from '../assets/matrix.png'
import Stack from '../assets/stack.png'

const Objectives = () => {
  return (
    <div id='objectives' className='container_objectives'>
        <div className='content_objectives'>
            <img src={Circle} alt='circle'/>
            <div className='text_objectives'>
                <p className='title_objectives'>AGILE METHODOLOGIES UNDERSTANDING:</p>
                <p className='desc_objectives'>Participants will gain understanding of Kanban and Scrum, and how they can be integrated for effective product development and business operations.</p>
            </div>
        </div>

        <div className='content_objectives'>
            <img src={Stack} alt='stack'/>
            <div className='text_objectives'>
                <p className='title_objectives'>STRATEGIC DECISION-MAKING:</p>
                <p className='desc_objectives'>Players should be able to develop strategic decision-making skills by making choices related to product selection, resource allocation, budgeting and team management.</p>
            </div>
        </div>

        <div className='content_objectives'>
            <img src={Chess} alt='chess'/>
            <div className='text_objectives'>
                <p className='title_objectives'>HOLISTIC UNDERSTANDING OF BUSINESS OPERATIONS:</p>
                <p className='desc_objectives'>Participants will gain a holistic understanding of business operations by experiencing the interconnectedness of various aspects, including product development, financial management and team dynamics.</p>
            </div>
        </div>

        <div className='content_objectives'>
            <img src={Matrix} alt='matrix'/>
            <div className='text_objectives'>
                <p className='title_objectives'>PRODUCT DEVELOPMENT LIFECYCLE:</p>
                <p className='desc_objectives'>Participants will learn the iterative process of product development, from conception to market success.</p>
            </div>
        </div>
        
        <div className='content_objectives'>
            <img src={Coins} alt='coins'/>
            <div className='text_objectives'>
                <p className='title_objectives'>FINANCIAL LITERACY:</p>
                <p className='desc_objectives'>Players will enhance their financial literacy by balancing budgets, handling revenue generation, and maintaining a detailed balance sheet per iteration.</p>
            </div>
        </div>

        <div className='content_objectives'>
            <img src={Arrow} alt='arrow'/>
            <div className='text_objectives'>
                <p className='title_objectives'>ADAPTABILITY AND FLEXIBILITY</p>
                <p className='desc_objectives'>Players will develop adaptability and flexibility as they respond to changing scenarios in the game.</p>
            </div>
        </div>
    </div>
  )
}

export default Objectives