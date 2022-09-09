import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { Button } from './Button';
import '../component/Navbar.css';

function Navbar() {

    const [click,setClick]=useState(false)
    const [button,setButton]=useState(true)

   

    // handelclick
    const handelClick=()=>{
        setClick(!click)
    }


    const closeMobileMenu=()=>setClick(false)


    //resize browser show button
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }



    window.addEventListener('resize', showButton);


  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                 <Link to="/" className="navbar-logo">
                    TRVL <i className="fab fa-typo3"></i>
                 </Link> 
                  <div className="menu-icon" onClick={handelClick}>
                    <i className={click?'fas fa-times':'fas fa-bars'}/>
                 </div>

                 {/* ul */}

                 <ul className={click?'nav-menu active':'nav-menu'}>
                   <li className="nav-item">
                    <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                        Home
                    </Link>
                   </li>

                   {/* 2 */}

                      <li className="nav-item">
                          <Link to='/Services' className='nav-link' onClick={closeMobileMenu}>
                              Services
                          </Link>
                      </li>

                      {/* 3 */}
                      <li className="nav-item">
                          <Link to='/Products' className='nav-link' onClick={closeMobileMenu}>
                              Products
                          </Link>
                      </li>
                      
                      {/* 4 */}
                      <li className="nav-item">
                          <Link to='/sign-up' className='nav-link-mobile' onClick={closeMobileMenu}>
                              Sign up
                          </Link>
                      </li>
                 </ul>

                  {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}

            </div>
        </nav>
    
    </>
  )
}

export default Navbar