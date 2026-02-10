import React from 'react'
import '../css/Shows.css';
import HeadingText from '../components/HeadingText';
import ShowDates from '../components/ShowDates';

export default function Calendar() {
  return (
    <div className='calendar'>
      <br />
        <HeadingText />
        <div className='showsList'>
          <ShowDates />
        </div>
    </div>
  )
}
