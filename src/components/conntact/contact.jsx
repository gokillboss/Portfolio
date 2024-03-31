import React from "react";
import { Container, Row, Col } from "react-bootstrap";



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
                            I am interested in web development, including frontend and backend.
                            I always aim to become the best web developer.
                            <br />
                            <br />
                            Contact me, and we'll be on the same side !!!
                        </p>
                    </div>
                </Col>

                <Col className="d-flex align-items-center justify-content-end mx-auto">

                    <div className="border p-3 d-inline-block mx-5">
                        <h2 className="">Message me here</h2>

                        <div className="mx-auto">

                            <div className="link-container">
                                <a href="https://www.linkedin.com/in/sam-ho-b1006b221/" className="">
                                    <img src={require("./LinkedIn.png")} alt="" className="img-fluid" style={{ width: '25px', margin: '4px' }} />
                                    <span className="mx-2">@Sam Ho</span>
                                </a>
                            </div>
                            <div className="">
                                <img src={require("./Email.png")} alt="" className="" />
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
