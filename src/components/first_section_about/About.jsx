import React from 'react';
import './about.css';
import { NavLink } from "react-router-dom";


const About = () => {
    return (
        <>
            <div className="container">
                <div data-aos='fade-right' className='heading' >
                    <h1>
                        Sam is a <span> web developer </span> and {" "}
                        <span > Fullstack developer</span>
                    </h1>
                    <p className='description'>
                        He crafts responsive websites where technologies meet creativity
                    </p>
                    <NavLink to='/contact'>
                        <button className='contact'>
                            Contact me !!
                        </button>
                    </NavLink>
                </div>

                <div data-aos="fade-left" data-aos-delay="400" className='image-container'>
                    <div className='selfie'>
                        <img src={require('./Selfie.png')} alt="selfie" />
                    </div>

                    <div className="outer-container">
                        <div className="square"></div>
                        <div className="text-content">
                            I gonna be the best <span>Web Developer</span>
                        </div>
                    </div>

                </div>

            </div>

            <div data-aos='fade-up' className='quote'>
                <img src={require('./quote.png')} alt="" />
            </div>
        </>
    );
};

export default About;
