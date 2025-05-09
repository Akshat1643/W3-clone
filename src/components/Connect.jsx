import React from 'react'
import Card from "react-bootstrap/Card";
import "../styles/Connect.css"
import Button from 'react-bootstrap/Button';

const Connect = () => {
  return (
    <section className='container-fluid mt-5  py-5 '>
        <div className="container border p-2 ">
            <div className='d-flex '>
                <div className="connect_left  d-flex flex-column gap-3 pb-3 ">
                <h3 className="text-primary">Let's Connect!</h3>

                    <h3>Our experts help you <br />
                    achieve your dream</h3>
                    <h4>An expert support makes it possible!</h4>
                    <img src="https://www.w3villa.com/production/assets/landing_page/lets-connect-us-05d91f9ff4bcce0cf3a205cfadb7566001de79fa8eb12f1b1527ed3c1c5b7853.webp" alt="" />

                </div>
                <div className="connect_right bg-light p-5  d-flex flex-column justify-content-between  ">
                    <div className='d-flex justify-content-between gap-5'>
                        <div className='full_name '>
                        <label htmlFor="">Full Name</label><input className='py-2 border-0 px-2' type="text" placeholder='' />
                        </div>
                        <div className='full_name'>
                        <label htmlFor="">Email</label> <input  className='py-2 border-0 px-2' type="email" placeholder='' />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between gap-5'>
                    <div className='full_name'>
                    <label htmlFor="">Country</label><input  className='py-2 border-0 px-2' type="text"  />
                        </div>
                        <div className='full_name'>
                        <label htmlFor="">Contact</label> <input  className='py-2 border-0 px-2' type="email"  />
                        </div>
                    </div>
                    <div className=' connect_form_input '>
                       <label htmlFor="">Message</label> <input className='pb-5 border-0 ' type="text"  />
                    </div>
                    <div className='text-center '>
                    <Button className='px-5' variant="primary">SUBMIT</Button>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Connect
