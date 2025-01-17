import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Portfolio from "../../assets/Portfolio.png";
import Projxon from "../../assets/Projxon.png";
import Thinail from "../../assets/Thinail.png";

const projects = [
    {
        img: Projxon,
        langs: ["Bootstrap", "CSS", "JavaScript", "React", "Express", "AWS"],
        title: "Projxon",
        disc: "Website for Projxon company",
        link: "https://www.projxon.com/",
    },
    {
        img: Thinail,
        langs: ["JavaScript", "CSS", "React", "Express", "AWS", "MongoDB"],
        title: "Thinail",
        disc: "Web app practice for nail certificate exam",
        link: "https://thinail.com/",
    },
    {
        img: Portfolio,
        langs: ["Bootstrap", "CSS", "JavaScript", "React", "AOS"],
        title: "Portfolio",
        disc: "You are using it right now",
        link: "https://dhsam-bmt.com/",
    },
];

function Projects() {
    return (
        <Container className="container-md mx-auto pt-5 my-5">
            <div className="d-flex align-items-center justify-content-between">
                <div data-aos="fade-down" className="mb-3">
                    <div className="fs-2 text-white">
                        <span style={{ color: "#C778DD" }}>#</span>Projects
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    className="mx-4 my-3 d-none d-sm-block"
                    style={{ width: "80%", backgroundColor: "#C778DD", height: "1px" }}
                ></div>
                <div data-aos="fade-right">
                    <NavLink
                        to="/projects"
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        <span className="d-none d-sm-inline">View all ~~</span>
                        <span className="d-inline-block d-sm-none">View all ~~</span>
                    </NavLink>
                </div>
            </div>

            <div data-aos="fade-up" className="mt-5">
                <Row xs={1} sm={2} md={2} lg={3} className="g-4">
                    {projects.map(({ img, langs, title, disc, link }, index) => (
                        <Col key={index}>
                            <ProjectCard
                                img={img}
                                langs={langs}
                                title={title}
                                disc={disc}
                                link={link}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
}

export default Projects;
