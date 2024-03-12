import React from 'react'
import Solution from './Solution'
import '../styles/Solutions.css';
function Solutions({carddata}){
  return (
    <div className='solu-main' >
    {/* <div className='solutions-head' >
        SOLUTIONS 
    </div> */}
    <div className='solution-wrapper' >
      {
        carddata.map((card) =>{
          return <Solution {...card} ></Solution>
        })
      }
    </div>
    </div>
  )
}

export default Solutions
