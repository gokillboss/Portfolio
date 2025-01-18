import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Envelope } from 'react-bootstrap-icons';


const Contact = () => {
    return (
        <Container fluid data-aos-delay="1000" data-aos="fade-up" className="container-md mx-auto pt-5 my-5 pb-5">
            <Row className="align-items-center justify-content-between gap-5 ml-3">
                <Col className='d-flex my-5'>
                    <div data-aos="fade-up" className='fs-2 text-white'>
                        <span style={{ color: "#C778DD" }}>#</span>Contact
                    </div>
                    <div data-aos="fade-left" className="mx-4 my-4 d-none d-sm-block" style={{ width: '90%', backgroundColor: "#C778DD", height: '1px' }}></div>
                </Col>
            </Row>

            <Row className="mx-auto align-items-center justify-content-between" style={{ color: '#ABB2BF' }}>

                <Col md={6} className="mx-auto">
                    <div className="" >
                        <p>
                            I specialize in crafting seamless, dynamic, and user-friendly websites, mastering both frontend and backend development. Every project I undertake is a step toward my ultimate goal: becoming an exceptional web developer who delivers nothing short of excellence.
                            <br />
                            <br />
                            Let's connect and create something extraordinary together!
                        </p>
                    </div>
                </Col>

                <Col className="d-flex align-items-center justify-content-end mx-auto">
                    <div className="border p-3 d-inline-block mx-5 text-white" style={{ width: '100%', maxWidth: '20rem' }}>
                        <h2 className="">Message me here</h2>
                        <div className="mx-auto">
                            <div className="d-flex align-items-center mt-2r">
                                <a
                                    href="https://www.linkedin.com/in/sam-ho-b1006b221/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={25} />
                                </a>
                                <span className="mx-2">@Sam Ho</span>
                            </div>
                            <div className="d-flex align-items-center mt-2">
                                <a
                                    href="mailto:samho.bmt@gmail.com"
                                    className="social-link"
                                    aria-label="Email"
                                >
                                    <Envelope size={25} />
                                </a>
                                <span className="link-text"> samho.bmt@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
