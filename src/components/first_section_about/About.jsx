import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './about.css';

const About = () => {
    return (
        <Container className="container-md min-vh-100 d-flex flex-column justify-content-center align-items-center pt-5 my-3 gap-3">
            <Row className="align-items-center justify-content-between ml-3">
                <Col xs={6} data-aos="fade-right" data-aos-delay="400" className="mx-auto justify-content-end" style={{ minWidth: '25rem' }}>
                    <h2 className="font-semibold text-3xl text-white mb-3">
                        Sam is a <span style={{ color: "#C778DD" }}>web developer</span> and <span style={{ color: "#C778DD" }}>Fullstack developer</span>
                    </h2>
                    <p className="text-white my-6">
                        He crafts responsive websites where technologies meet creativity
                    </p>

                    <div className='mt-3'>
                        <NavLink to='/contact'>
                            <button className='contact'>
                                Contact me!!
                            </button>
                        </NavLink>
                    </div>

                </Col>

                <Col xs={6} data-aos="fade-left" data-aos-delay="400" className="mx-auto" style={{ minWidth: '20rem' }}>
                    <div className="d-flex justify-content-center">
                        <img src={require('./Selfie.png')} alt="selfie" style={{ width: '25rem', maxWidth: '100%' }} />
                    </div>

                    <div className="d-flex justify-content-center my-3 ">
                        <div className="border d-flex align-items-center gap-1 border-[#ABB2BF] p-2 text-[#ABB2BF]" style={{ maxWidth: "100%" }}>
                            <span className='mx-auto' style={{ backgroundColor: "#C778DD", width: '15px', height: '15px' }}></span>
                            <span className="text-white align-items-center mx-3 text-center" style={{fontSize : '20px'}}>
                                Think Twice <span style={{ color: '#C778DD' }}>Code Once</span>
                            </span>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="mt-md-6 align-items-center justify-content-between my-5 pt-5"
                style={{ minWidth: '20rem' }}>
                <Col data-aos='fade-up' className='quote'>
                    <img src={require('./quote.png')} alt="" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default About;
