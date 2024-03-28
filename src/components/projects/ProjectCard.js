import React from "react";
import './ProjectCard.css'
import { Card, Row, Col } from "react-bootstrap";

const ProjectCard = ({ img, langs, title, disc }) => {
    return (
        <Card data-aos="fade-up" data-aos-delay="300" className="mx-auto w-70 md:w-48 lg:w-30 border-purple p-1"
            style={{
                borderColor: '#C778DD',
                maxWidth: '400px',
            }}>
            <Card.Img
                className="img-fluid img-thumbnail align-item-center"
                style={{ maxHeight: '250px', width: '100%', objectFit: 'cover' }}
                variant="top"
                src={img}
            />

            <Card.Body>

                <Card.Title className="text-white text-xl font-bolt mx-auto d-flex align-items-center justify-content-center">{title}</Card.Title>
                <div className="" style={{ width: '100%', backgroundColor: "#C778DD", height: '1px' }}></div>
                <Row className="justify-content-center mx-auto p-1">
                    <Col xs={12} md="auto" className="d-flex flex-wrap gap-2 ">
                        {langs.map((lang, index) => (
                            <span key={index} className="text-white">{lang}</span>
                        ))}
                    </Col>
                </Row>
                <div className="" style={{ width: '100%', backgroundColor: "#C778DD", height: '1px' }}></div>

                <Card.Text className="text-white  m-3  d-flex flex-wrap">
                    {disc}</Card.Text>
                <button className="py-2 px-4 linkButton"
                >
                    Live {"<"}~{">"}
                </button>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;
