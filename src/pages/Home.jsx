import React from 'react'
import '../css/Home.css';
import VideoBg from "../components/VideoBg";
import NewsGrid from "../components/NewsGrid";

export default function Home() {
  return (
    <div className='home'>
      <VideoBg />
      <NewsGrid />
    </div>
  )
}
