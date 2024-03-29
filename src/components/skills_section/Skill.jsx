import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
    const skills = [
        {
            title: "Language",
            languages: ["JavaScript", "C++", "Python", "Java"]
        },
        { title: "Databases", languages: ["SQL", "MongoDB", "Firebase"] },
        {
            title: "Tools",
            languages: [
                "VSCode",
                "Figma",
                "Git",
                "CMV",
                "Postman",
            ],
        },
        {
            title: "Other",
            languages: ["HTML", "CSS", "Bootstrap", "MUI"],
        },
        {
            title: "Frameworks",
            languages: [
                "React",
                "Express.js",
                "Koa.js"
            ],
        },
    ];

    return (
        <Container className='pt-5 my-6'>
            <Row className='my-5'>
                <Col className='d-flex my-5'>
                    <div data-aos="fade-up" className='fs-2 text-white'>
                        <span style={{ color: "#C778DD" }}>#</span>Skill
                    </div>
                    <div data-aos="fade-left" className="mx-4 my-4 d-none d-sm-block" style={{ width: '90%', backgroundColor: "#C778DD", height: '1px' }}></div>
                </Col>
            </Row>

            <Row className='my-5 justify-content-center'>
                <Col xs={12} lg={6} className='my-4 mx-auto'>
                    <div data-aos="fade-right" className='d-flex align-items-center justify-content-center'>
                        <img className="pic img-fluid" src={require("./shapes.png")} alt="" />
                    </div>
                </Col>
                <Col data-aos="fade-left" xs={12} lg={6} className='justify-content-center'>
                    <div className='d-flex flex-wrap mx-auto'>
                        {skills.map(({ title, languages }) => (
                            <div key={title} className='m-2 p-2 border'
                                style={{ width: '100%', maxWidth: '12rem' }}
                            // style={{ border: '1px solid white', width: '70%' }}
                            >
                                <div className='p-2'>
                                    <h2 className="text-white">{title}</h2>
                                </div>
                                <div className='p-2' style={{ borderTop: '1px solid white' }}>
                                    {languages.map((language, index) => (
                                        <div key={index} className="text-white">{language}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default Skills;
