import React from 'react'
import '../css/About.css';
import HeadingText from '../components/HeadingText';
import AboutMe from '../components/AboutMe';
import Slideshow from '../components/Slideshow';

export default function About() {
  return (
    <div className='about'>
        <HeadingText />
        <div>
          <Slideshow />
          <AboutMe />
        </div>
    </div>
  )
}
