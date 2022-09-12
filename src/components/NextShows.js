import React from 'react'
import ShowDates from './ShowDates'
import '../css/NextShows.css';

export default function NextShows() {
  return (
    <div className='nextShows'>
        <div className='titleText'>
            <h3>This weeks upcoming shows:</h3>
        </div>
        <div className='calendDates'>
            <ShowDates />
        </div>
    </div>
  )
}
