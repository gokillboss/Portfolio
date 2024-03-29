import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const Summary = () => {
    return (
        <Container className='my-5'>
            <Row className='my-2'>
                <Col className='d-flex my-5'>
                    <div data-aos="fade-up" className='fs-2 text-white'>
                        <span style={{ color: "#C778DD" }}>#</span>About
                    </div>
                    <div data-aos="fade-left" className="mx-4 my-4 d-none d-sm-block" style={{ width: '90%', backgroundColor: "#C778DD", height: '1px' }}></div>
                </Col>
            </Row>


            <Row className='align-items-center justify-content-between' style={{ marginLeft: '2rem' }}>

                <Col data-aos="fade-right" lg={6} className='leftside'>

                    <div className=''
                        style={{ color: '#ABB2BF' }}
                    >
                        <p>
                            Hello, I'm Sam!
                            <br /><br />
                            I am a potential web programmer, passionate about creating dynamic
                            websites and web applications. With a solid background in both backend
                            and frontend, I can build unique and exciting online experiences.
                            <br /><br />
                            I enjoy working with new technologies to create better web products.
                            I always try to study and absorb new knowledge to improve my skills and pursue
                            creativity in my work.
                            <br /><br />
                            I believe that the ability to continuously learn and a creative spirit are two
                            important factors in developing my career in this field.
                        </p>
                    </div>
                    <div className="mt-3">
                        <NavLink to='/about'>
                            <div className='my-3 mx-auto p-2'>
                                <button className='contact'>
                                    Read me !! ~~
                                </button>
                            </div>
                        </NavLink>
                    </div>
                </Col>
                <Col data-aos="fade-left" lg={6} className='d-flex justify-content-center align-items-center'>
                    <div style={{ maxWidth: '70%', height: 'auto' }}>
                        <img className="mx-auto img-fluid " src={require("./selfie.png")} alt="" />
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default Summary;
