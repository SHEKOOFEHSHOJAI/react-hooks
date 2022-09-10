import React from 'react'
import {Link} from 'react-router-dom';

function Carditem() {
  return (
    <div>

        <li className="cards--item">
            <Link className="cards--item--link">
               <figure className="cards--item--pic--wrap">
                 <img src="" alt="travel" className="cards--item--img" />
               </figure>
               <div className="cards--item--info">
                <h5 className='cards--item--text'>
                    
                </h5>
               </div>
            </Link>
        </li>
    </div>
  )
}

export default Carditem;