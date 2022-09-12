import React from 'react'
import '../css/Music.css';
import HeadingText from '../components/HeadingText';
import YTvideos from '../components/YTvideos';
import Soundcloud from '../components/SoundCloud';

export default function Music() {
  return (
    <div className='music'>
        <HeadingText />
        <div>
          <YTvideos />
          <Soundcloud />
        </div>
    </div>
  )
}
