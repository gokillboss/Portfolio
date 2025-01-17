import React from "react";
import './footer.css';
import { Linkedin, Github, Envelope } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="end-line" data-aos="fade-right"></div>
            
            <Container data-aos="fade-up">
                <Row className="footer-content g-4">
                    {/* Left Section */}
                    <Col lg={8} md={7} sm={12}>
                        <div className="brand-info">
                            <div className="brand-header">
                                <img src={require("./logo.png")} alt="" className="brand-logo" />
                                <span className="brand-name">Sam</span>
                                <span className="brand-email">samho.bmt@gmail.com</span>
                            </div>
                            <p className="brand-description">
                                Web developer and fullstack developer
                            </p>
                        </div>
                    </Col>

                    {/* Right Section */}
                    <Col lg={4} md={5} sm={12}>
                        <div className="social-section align-items-center">
                            <h2 className="social-title">Media</h2>
                            <div className="social-links">
                                <a 
                                    href="https://www.linkedin.com/in/sam-ho-b1006b221/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={25} />
                                </a>
                                <a 
                                    href="mailto:samho.bmt@gmail.com"
                                    className="social-link"
                                    aria-label="Email"
                                >
                                    <Envelope size={25} />
                                </a>
                                <a 
                                    href="https://github.com/gokillboss"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="GitHub"
                                >
                                    <Github size={25} />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="copyright" data-aos="fade-up" data-aos-delay="100">
                    © Copyright 2022. Made by Sam, designed by Elias
                </div>
            </Container>
        </footer>
    );
}

export default Footer;