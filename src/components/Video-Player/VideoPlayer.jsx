import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video-6XtGR-D3.mp4'

const VideoPlayer = (props) => {
    
    const player=useRef(null); 

    const closePlayer = (e) => {
        if(e.target===player.current){
            {props.setPlayState(false)};
        }
    }

  return (
    <div ref={player} onClick={closePlayer} className={`video-player ${props.playState ? '' : 'hide'}`}>
        <video src={video} controls autoPlay muted></video>
    </div>
  )
}

export default VideoPlayer