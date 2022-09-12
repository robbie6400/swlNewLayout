import React from 'react'
import '../css/NewsGrid.css'
import EPKtile from './EPKtile'
import NextShows from './NextShows'

export default function NewsGrid() {
  return (
    <div className='newsGrid'>
        <div className='homeGrid'>
            <ul>
                <li>
                  <NextShows />
                </li>
                <li>
                  <EPKtile />
                </li>
            </ul>
        </div>
    </div>
  )
}
