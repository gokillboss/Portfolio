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
                            I am a potential web programmer, passionate about creating dynamic
                            websites and web applications. With a solid background in both backend
                            and frontend, I can build unique and exciting online experiences.
                            <br /><br />
                            I enjoy working with new technologies to create better web products.
                            I always try to study and absorb new knowledge to improve my skills and pursue
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
