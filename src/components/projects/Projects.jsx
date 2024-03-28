import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from "./ProjectCard";
import WhaleTrade from "./WhaleTrade.png";
import Wordle from "./Wordle.png";
import Nutrition from "./nutrition.png";

const projects = [
    {
        img: WhaleTrade,
        langs: ["html", "css", "javascript", "react", "Express", "Node.js, MongoDB"],
        title: "Whale Trade",
        disc: "Paper trading web app",
    },
    {
        img: Wordle,
        langs: ["MUI", "html", "css", "javascript", "Node.js", "React", "Hook"],
        title: "Wordle",
        disc: "A Word guessing game",
    },
    {
        img: Nutrition,
        langs: ["MUI", "css", "javascript", "Node.js", "Koa.JS", "MySQL", "React"],
        title: "Food Trace",
        disc: "Tracking User Nutrition Web App",
    },
];

function Projects() {
    return (
        <Container className="container-md mx-auto pt-5 my-5 ">
            <div className="d-flex my-5 align-items-center justify-content-between my-auto">
                <div data-aos="fade-down" className="mb-3 mb-sm-0">
                    <div className="fs-2" style={{ color: 'white' }}>
                        <span style={{ color: "#C778DD" }}>#</span>Projects
                    </div>
                </div>
                {/*  line */}
                <div data-aos="fade-left" className="mx-4 my-5 d-none d-sm-block" style={{ width: '70%', backgroundColor: "#C778DD", height: '1px' }}></div>

                <div data-aos="fade-right">
                    <NavLink to="/projects" style={{ color: 'white', textDecoration: 'none' }}>
                        <span className="d-inline-block d-sm-none">View all ~~</span>
                        <span className="d-none d-sm-inline">View all ~~</span>
                    </NavLink>
                </div>
            </div>

            {/* bottom */}
            <div data-aos="fade-up" className="mx-auto my-5 pt-5 justify-content-center align-items-center" >
                <Row xs={1} sm={2} md={3} lg={3} xl={3} className="g-4">
                    {projects.map(({ img, langs, title, disc }, index) => (
                        <Col key={index}>
                            <ProjectCard img={img} langs={langs} title={title} disc={disc} />
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
}

export default Projects;
