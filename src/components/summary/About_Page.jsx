import { Container, Row, Col } from 'react-bootstrap';


const AboutPage = () => {
    return (
        <Container className='my-5 pt-5'>
            <Row className='d-flex mx-auto'>
                <div className='font-m text-white' style={{fontSize : '32px'}}>
                    <span style={{ color: '#C778DD'}}> # </span>
                     Who am I ?
                </div>

            </Row>
            <Row className='align-items-center justify-content-between' style={{ marginLeft: 'rem' }}>

                <Col data-aos="fade-right" lg={6} className='leftside'>

                    <div className=''
                        style={{ color: '#ABB2BF' }}
                    >
                        <p>
                            Hello, I'm Sam!
                            <br /><br />
                            I am a Full Stack Developer with a strong foundation in backend technologies and frontend development, dedicated to building scalable, efficient, and user-friendly web applications. With hands-on experience in Node.js, Express.js, React, and database management systems like MongoDB and MySQL, I transform complex ideas into seamless digital solutions.
                            <br /><br />
                            By combining technical expertise, creativity, and a user-centered approach, I aim to contribute to innovative projects that align with business objectives and make a lasting impact. I thrive in dynamic environments that encourage collaboration and innovation, and I am always eager to tackle new challenges to grow both personally and professionally.
                            creativity in my work.
                            <br /><br />
                            I believe that the ability to continuously learn and a creative spirit are two
                            important factors in developing my career in this field.
                        </p>
                    </div>
                  
                </Col>
                <Col data-aos="fade-left" lg={6} className='d-flex justify-content-center align-items-center'>
                    <div style={{ maxWidth: '70%', height: 'auto' }}>
                        <img className="mx-auto img-fluid " src={require("./selfie.png")} alt="" />
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;
