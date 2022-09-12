import React from 'react'
import '../css/Soundcloud.css'

export default function SoundCloud() {
  return (
    <div className='soundcloud'>
        <h2> Check out some of my originals on Soundcloud ! </h2>
        <div className='soundcloudPlayers'>
            <ul>
                <li>
                    <iframe title="mySoundCloudFrame" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/753393823&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </li>    
                <li>   
                    <iframe title="mySoundCloudFrame1" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/753394492&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>    
                </li>    
                <li>    
                    <iframe title="mySoundCloudFrame2" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/753395629&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>   
                </li>    
                <li>    
                    <iframe title="mySoundCloudFrame3" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/753396448&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>    
                </li>    
                <li>
                    <iframe title="mySoundCloudFrame4" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/753397822&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>  
                </li>
            </ul>
        </div>
    </div>
  )
}
