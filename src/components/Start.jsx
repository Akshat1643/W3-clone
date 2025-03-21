import React from 'react'
import "../styles/Start.css"

const Start = () => {
  return (
    <section className=' container start' >
        <div className="bg-light left_s py-3 ">
            <div className="text d-flex flex-column gap-3 p-2">
            <h2>Ready to start?</h2>
            <h5>Get in-context advice from our experts about your most pressing issues or areas of interest</h5>
            <h5>Contact us Now </h5>
            </div>
     
        </div>
        <div className="bg-light-subtle left_s py-3 ">
            <div className="text d-flex flex-column gap-3 p-2">
            <h2>Looking for a Job?</h2>
            <h5>We know what it takes to get the job you deserve. join the most successful and innovative research company.</h5>
            <h5>See Open Position </h5>
            </div>
           </div> 
        
    </section>
  )
}

export default Start
