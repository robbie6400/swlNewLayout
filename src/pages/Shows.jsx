import React from 'react'
import '../css/Shows.css';
import HeadingText from '../components/HeadingText';
import AllShows from '../components/AllShows';

export default function Shows() {
  return (
    <div className='shows'>
        <HeadingText />
        <div className='showsList'>
          <AllShows />
        </div>
    </div>
  )
}
