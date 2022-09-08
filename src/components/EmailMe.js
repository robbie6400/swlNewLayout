import React from 'react'
import '../css/EmailMe.css';

export default function EmailMe() {
  return (
    <div className="emailForm">
      <h2>Send me an email:</h2>
      <form action="mailto:robbie6400@gmail.com" method="post" encType="text/plain">
        <div className='formInput'>
          <input type="text" name="MESSAGE FROM SWL: " size="50" />
        </div>
        <p>Please leave your name, way of contact, location and venue name.</p>
        <div className='formButtons'>
          <input type="reset" value="Clear" />
          <input type="submit" value="Book Now" />
        </div>
      </form>
    </div>
  )
}
