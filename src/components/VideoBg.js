import React from 'react'
import '../css/VideoBg.css'
import videoBg from '../images/homeVideo.mp4'

export default function VideoBg() {
  return (
    <div className='videoBgCSS'>  
            <video src={videoBg} type='video/mp4' autoPlay loop muted style={{ WebkitMediaControls: 'display(none)' }} />
            <div className='frontContent'>
                <h1>Skyler Whitfield Live</h1>
                <h2>Musician, Singer, Guitar, Bass, Lessons
                <br />Voice-overs, On-air talent</h2>
            </div>
    </div>
  )
}
