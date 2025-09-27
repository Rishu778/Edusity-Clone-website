import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonial = () => {

    const slider = useRef();
    let tx=0;
    
    const sildeforward = ()=> {
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slidebackward = () => {
        if(tx < 0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials container'>
        <img src={next_icon} alt="Unavailable" className='next-btn' onClick={sildeforward} />
        <img src={back_icon} alt="Unavailable" className='back-btn' onClick={slidebackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Tempora tenetur iusto accusamus blanditiis commodi doloribus eos, nemo maiores expedita molestiae?</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Tempora tenetur iusto accusamus blanditiis commodi doloribus eos, nemo maiores expedita molestiae?</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Tempora tenetur iusto accusamus blanditiis commodi doloribus eos, nemo maiores expedita molestiae?</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Tempora tenetur iusto accusamus blanditiis commodi doloribus eos, nemo maiores expedita molestiae?</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial