import React from 'react'
import Solution from './Solution'
import './Solutions.css';
const Solutions = () => {
  return (
    <div className='solu-main' >
    <div className='solutions-head' >
        SOLUTIONS WE OFFER 
    </div>
    <div>

        <div className='main-solutions-box' >
                <Solution></Solution>
                <Solution></Solution>
                <Solution></Solution>
                
            </div> 
        <div className='main-solutions-box' >
                <Solution></Solution>
                <Solution></Solution>
                <Solution></Solution>
                
            </div> 
    </div>
    </div>
  )
}

export default Solutions
