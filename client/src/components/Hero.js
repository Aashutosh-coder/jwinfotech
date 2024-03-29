import React from 'react'
import '../styles/Hero.css';
import wheel from '../wheel.png';
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <>
      <div className='main-hero'>
            <div className='left-hero' >
                    <div className='main-txt' >
                    Want to Make an Impact? Make a stronger Digital Footprint with us
                    </div> 
                    <div className='moving-text'>
                    <Typewriter
                options ={
                    {
                        autoStart:true,
                        loop:true,
                        delay:100,
                        strings:[
                            "IT SOLUTIONS",
                            "IOT DEVELOPMENT",
                            "AI & ML SOLUTIONS",
                            "UI & UX",
                            "STAFFING SERVICES"
                        ]
                    }
                }
             />
             
             
                    </div>

            </div>
            <div>
            
                <img className='tech-wheel' src= {wheel} alt="" />
            </div>
      </div>
            <div className='big-text' >
                We Build ! We Deliver!
            </div>
    </>
  )
}

export default Hero
