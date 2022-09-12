import React from 'react'
import '../css/YTvideos.css'

export default function YTvideos() {
  return (
    <div className='YTvideos'>
      <h2> Check out some of my past shows on YouTube ! </h2> 
      <div className='videos'>
        {/* <iframe src="https://www.youtube.com/embed/dLVMG1nzN54" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe src="https://www.youtube.com/embed/vFe5fx0UeSw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe src="https://www.youtube.com/embed/hu_TtXxSyU4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        
        <ul>
          <li>
            <iframe title="myYoutubeFrame" src="https://www.youtube.com/embed/dLVMG1nzN54" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </li>    
          <li>   
            <iframe title="myYoutubeFrame1" src="https://www.youtube.com/embed/vFe5fx0UeSw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </li>    
          <li>    
            <iframe title="myYoutubeFrame2" src="https://www.youtube.com/embed/hu_TtXxSyU4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </li>
        </ul>
      
      </div>
    </div>
  )
}
