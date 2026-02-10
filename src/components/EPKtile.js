import React from 'react'
import '../css/EPKtile.css'

export default function EPKtile() {
  return (
    <div className='epkTile'>
        <div className='epkContent'>
          <h3>Download my EPK:</h3>
        </div>
        <div className='button'>
          <a href='/public/test.pdf' download="test.pdf">Click to download</a>
        </div>
    </div>
  )
}
