import React from 'react'
import '../css/NewsGrid.css'
import EPKtile from './EPKtile'
import NextShows from './NextShows'

export default function NewsGrid() {
  return (
    <div className='newsGrid'>
        <NextShows />
        <div className='homeGrid'>
            <ul>
                <li>
                  <EPKtile />
                </li>
            </ul>
        </div>
    </div>
  )
}
