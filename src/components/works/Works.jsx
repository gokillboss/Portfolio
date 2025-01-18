import { Container, Row, Col } from 'react-bootstrap';
import React from "react";
import { NavLink } from "react-router-dom";
import './work.css';

const Works = () => {
    return (
        <Container className='work-container Container fluid'>
            {/* Header Section */}
            <Row className='my-5 pt-5'>
                <Col className='d-flex justify-content-between align-items-center'>
                    <div data-aos="fade-up" data-aos-duration="800" className='section-title'>
                        <span className="hash-symbol">#</span>Experience
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" className="title-line d-none d-sm-block"></div>
                    <div data-aos="fade-right" data-aos-duration="800">
                        <NavLink to="/projects" className="view-all-link">
                            View all ~~&gt;
                        </NavLink>
                    </div>
                </Col>
            </Row>

            {/* Experience Section */}
            <Row className='experience-section'>
                <Col md={6} className='mb-4' data-aos="fade-right" data-aos-duration="1000">
                    <div className="experience-card">
                        <div className="card-header">
                            <h3 className='position-title'>Full Stack Developer</h3>
                            <div className="company-info">
                                <a href="https://thinail.com" target="_blank" rel="noopener noreferrer" className="company-name">Thinail.com</a>
                                <span className="separator">|</span>
                                <span className="location">Remote</span>
                                <span className="separator">|</span>
                                <span className="duration">May 2024 – Current</span>
                            </div>
                        </div>
                        <p className="company-description">
                            Developed and launched a web application to help Vietnamese users prepare for the manicurist license exam, which now serves hundreds of users.
                        </p>
                        <ul className='experience-list'>
                            <li data-aos="fade-up" data-aos-delay="100">Backend: Built using Node.js, Express, and MongoDB for reliable data handling and robust performance.</li>
                            <li data-aos="fade-up" data-aos-delay="200">Frontend: Created with React, React Bootstrap, and CSS for a modern, user-friendly interface.</li>
                            <li data-aos="fade-up" data-aos-delay="300">Payment Processing: Integrated Stripe to handle secure payments for premium test features.</li>
                            <li data-aos="fade-up" data-aos-delay="400">Scalable Architecture: Designed to support hundreds of concurrent users with real-time data updates.</li>
                            <li data-aos="fade-up" data-aos-delay="500">Fully Deployed: Live on AWS with optimized configurations for accessibility and scalability.</li>
                        </ul>
                    </div>
                </Col>
                <Col md={6} className='mb-4' data-aos="fade-left" data-aos-duration="1000">
                    <div className="experience-card">
                        <div className="card-header">
                            <h3 className='position-title'>Full Stack Developer <span className="position-type">(Internship)</span></h3>
                            <div className="company-info">
                                <span className="company-name">PROJXON</span>
                                <span className="separator">|</span>
                                <span className="location">Remote</span>
                                <span className="separator">|</span>
                                <span className="duration">July 2024 – Current</span>
                            </div>
                        </div>
                        <ul className='experience-list'>
                            <li data-aos="fade-up" data-aos-delay="100">Designed and developed the company's official website, ensuring responsive functionality and user-friendly experience.</li>
                            <li data-aos="fade-up" data-aos-delay="200">Collaborated with the design team to implement UI/UX improvements and align with business goals.</li>
                            <li data-aos="fade-up" data-aos-delay="300">Integrated third-party APIs to enhance application features and expand capabilities.</li>
                            <li data-aos="fade-up" data-aos-delay="400">Performed testing and debugging, optimizing performance and ensuring reliability.</li>
                            <li data-aos="fade-up" data-aos-delay="500">Participated in coaching sessions, gaining expertise in project management, IT+AI, and career development.</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Works;