import React from 'react';
import { Link } from 'react-router-dom';
import './head.css'
import profile from './Profile.png'
const Head = () => {
  return (
    <section id='heading'>
      <div id='head'>
        <span>Capgemen - Figma Corporate Web Design</span>
        <div id='dp'>
          <img src={profile} alt="" />
          <span id='span1'>By Captain Design</span>
          <span>|</span>
          <span>Used by 736 people</span>
        </div>
      </div>
      <div id='btn'>
        <div>
          <i class="fa-sharp fa-regular fa-heart"></i>
          <span>10</span>
        </div>
       <Link id='figma' to="./figma"><button>Open in Figma</button></Link> 
      </div>
    </section>
  )
}
export default Head;