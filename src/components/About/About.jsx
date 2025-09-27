import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_img from '../../assets/play-icon.png'

const About = (props) => {
  return (
    <div className='about container'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_img} alt="" className='play-icon' onClick={()=> {
              {props.setPlayState(true)}
            }}  />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facere impedit fugit cupiditate voluptatem? Asperiores, velit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facere impedit fugit cupiditate voluptatem? Asperiores, velit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facere impedit fugit cupiditate voluptatem? Asperiores, velit.</p>
        </div>
    </div>
  )
}

export default About