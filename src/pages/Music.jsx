import React from 'react'
import '../css/Music.css';
import HeadingText from '../components/HeadingText';
import Spotify from '../components/Spotify';

export default function Music() {
  return (
    <div className='music'>
        <HeadingText />
        <div>
          
          <Spotify />
        </div>
    </div>
  )
}
