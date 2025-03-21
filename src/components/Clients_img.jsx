import React from 'react'
import "../styles/Client_img.css"
const Clients_img = ({ imgSrc, altText }) => {
  return (
    <div className='clients rounded-1'>
        <img src={imgSrc} alt={altText} className="Client_img img-fluid" />
    </div>
  )
}

export default Clients_img
