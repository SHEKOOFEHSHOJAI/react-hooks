import React from 'react'
import '../component/HeroSecrion.css';
import '../App.css'
import { Button } from './Button'

function HeroSecrion() {
  return (
    
      <div className='hero-container'>

          <video src='/video/video-2.mp4' autoPlay loop muted />
          <h1>  ADVENTURE AWAITS</h1>
          <p>what are you waitting for?</p>

          <div className="hero-btn">
            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn-large'>
                GET START
            </Button>

            <Button className="btns" buttonStyle='btn--p' buttonSize='btn-large'>
                  WATCH TRAILER<i className='far fa-play-circle'/>
            </Button>
          </div>
    </div>
  )
}

export default HeroSecrion