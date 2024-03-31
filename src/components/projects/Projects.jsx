import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from "./ProjectCard";
import WhaleTrade from "./WhaleTrade.png";
import Wordle from "./Wordle.png";
import Nutrition from "./nutrition.png";
import Portfolio from "./Portfolio.png";
import BookTrade from './BookTrade.png'

const projects = [
    {
        img: WhaleTrade,
        langs: ["html", "CSS", "javascript", "React", "Express", "Node.js, MongoDB"],
        title: "Whale Trade",
        disc: "Paper trading web app",
        link : 'https://github.com/gokillboss/WhaleTrade'
    },
    {
        img: BookTrade,
        langs: ["Bootstrap", "CSS", "javascript", "React", "MySQL", "Node.JS"],
        title: "Portfolio",
        disc: "Web app using to sell books",
        link : 'https://github.com/gokillboss/Portfolio'

    },
   
    {
        img: Nutrition,
        langs: ["MUI", "CSS", "javascript", "Node.js", "Koa.JS", "MySQL", "React"],
        title: "Food Trace",
        disc: "Tracking User Nutrition Web App",
        link : 'https://github.com/gokillboss/FoodTrace'

    },
    {
        img: Portfolio,
        langs: ["Bootstrap", "CSS", "javascript", "React, AOE"],
        title: "Portfolio",
        disc: "You are using it right now",
        link : 'https://github.com/gokillboss/Portfolio'

    },
    {
        img: Wordle,
        langs: ["MUI", "html", "CSS", "javascript", "Node.js", "React"],
        title: "Wordle",
        disc: "A Word guessing game",
        link: 'https://github.com/gokillboss/Wordle'
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

            <div data-aos="fade-up" className="mx-auto my-5 pt-5 justify-content-center align-items-center" >
                <Row xs={1} sm={2} md={2} lg={3} xl={3} className="g-4 ">
                    {projects.map(({ img, langs, title, disc, link }, index) => (
                        <Col xs={12} lg={6}  key={index}>
                            <ProjectCard img={img} langs={langs} title={title} disc={disc} link={link} />
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
}

export default Projects;
