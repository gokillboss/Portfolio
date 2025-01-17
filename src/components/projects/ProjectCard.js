import React from "react";
import './ProjectCard.css';
import { Card, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ img, langs, title, disc, link }) => {
    return (
        <Card
            data-aos="fade-up"
            data-aos-delay="300"
            className="project-card mx-auto"
        >
            <Card.Img
                className="project-image"
                variant="top"
                src={img}
            />
            <Card.Body>
                <Card.Title className="project-title">{title}</Card.Title>
                <div className="divider"></div>
                <Row className="justify-content-center mx-auto p-1">
                    <Col xs={12} md="auto" className="d-flex flex-wrap gap-2">
                        {langs.map((lang, index) => (
                            <span key={index} className="lang-tag">{lang}</span>
                        ))}
                    </Col>
                </Row>
                <div className="divider"></div>
                <Card.Text className="project-description">
                    {disc}
                </Card.Text>
                <NavLink
                    to={link}
                    style={{ textDecoration: 'none' }}
                >
                    <button className="live-button">
                        Live {"<"}~{">"}
                    </button>
                </NavLink>


            </Card.Body>
        </Card>
    );
};

export default ProjectCard;
