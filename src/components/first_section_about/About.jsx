import React from 'react';
import './about.css'
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <Container className="max-w-[1560px] mx-auto min-vh-100 d-flex flex-column justify-content-between align-items-center pt-5">
            <Row className="w-10/12 sm:w-8/12  align-items-center justify-content-between gap-5">
                <Col data-aos="fade-right" data-aos-delay="400" className="ml-0">
                    <h2 className="font-semibold text-[32px] text-white mb-3">
                        Sam is a <span style={{ color: "#C778DD" }}> web developer </span> and {" "}
                        <span style={{ color: "#C778DD" }}> Fullstack developer</span>
                    </h2>
                    <p className="text-white my-6">
                        He crafts responsive websites where technologies meet creativity
                    </p>
                    <NavLink to='/contact'>
                        <div className='mt-3'>
                            <button className='contact'>
                                Contact me !!
                            </button>
                        </div>

                    </NavLink>
                </Col>

                <Col data-aos="fade-left" data-aos-delay="400">
                    <div className="d-flex justify-content-end">
                        <img src={require('./Selfie.png')} alt="selfie" style={{ width: '25rem' }} />
                    </div>

                    <div className="d-flex justify-content-end mt-3">
                        <div className="border d-flex align-items-center gap-1 border-[#ABB2BF] p-2 text-[#ABB2BF]" style={{ width: "25rem" }}>
                            <span style={{ backgroundColor: "#C778DD", width: '1rem', height: '1rem', marginLeft: '2.5rem' }}></span>
                            <span className="text-white align-items-center mx-3 text-center">
                                I'm going to be the best <span>Web Developer</span>
                            </span>
                        </div>
                    </div>
                </Col>



            </Row>


            <Row className="w-10/12 sm:w-8/12 mt-md-6 align-items-center justify-content-between" style={{ marginTop: "10rem" }}>
                <Col data-aos='fade-up' className='quote'>
                    <img src={require('./quote.png')} alt="" className="img-fluid" />
                </Col>
            </Row>

        </Container>
    );
};

export default About;
