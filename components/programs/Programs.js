

import React from 'react'
import { programsData } from '../../programsData';




const Programs = () => {
  return (

    <div className='Programs' id='programs'> 
      <div className='programs-header'>
        <span className='strong-text'>What we provide</span> 
        {/* <span>can apply</span>
        <span className='strong-text'>for today...</span>  */}
      </div> 

      <div className='programs-categories'>
        {programsData.map((program)=> (
          <div className='categorys'>
            {/* {program.image}  */}
            <span>{program.heading}</span>
            <span>{program.details}</span> 
            <div className='join-now'>
              <span>Contact us </span> <img src={`/images/rightArrow.png/`} alt="Right Arrow" />
            </div>
          </div>
        ))}
      </div>
    </div> 

  )
}

export default Programs
