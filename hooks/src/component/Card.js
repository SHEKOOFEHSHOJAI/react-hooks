import React from 'react'
import Carditem from './Carditem'
import '../component/Card.css'
function Card() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations</h1>
    
     <div className="cards--container">
        <div className="card--wrapper">
            <ul className="cards--items">
                <Carditem/>
            </ul>
        </div>
     </div>
    </div>
  )
}

export default Card