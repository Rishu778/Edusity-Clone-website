import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonial'
import Contact from './components/Contacts/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/Video-Player/VideoPlayer'

const App = () => {
  const [playState,setPlayState]=useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title subTitle="Our Progams" title="What we Offer"/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle="Gallery" title="Campus Photos"/>
      <Campus/>
      <Title subTitle="TESTIMONIALS" title="What Students Say"/>
      <div className="container">
        <Testimonials/>
      </div>
      <Title subTitle="Contact Us" title="Get In Touch"/>
      <Contact/>
      <div className="container">
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App