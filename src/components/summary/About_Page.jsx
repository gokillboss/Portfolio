import './About_Page.css';

const AboutPage = () => {
    return (
        <div className='about-box'>
            <div className='about-head'>
                <span style={{ color: '#C778DD' }}> #</span>
                Who am I ?
            </div>

            <div className='about-body'>
                <div data-aos="fade-right" className='about-left'>
                    <div className='about-text'>
                        <p>
                            Hello, i’m Sam!
                            <br />
                            <br />
                            I am a potential web programmer, passionate about creating dynamic
                            websites and web applications. With a solid background in both backend
                            and frontend, I can build unique and exciting online experiences.
                            <br />
                            <br />
                            I  enjoy working with new technologies to create the better web products.
                            I always try to study and absorb new knowledge to improve my skills and pursue
                            creativity in my work
                            <br />
                            <br />
                            I believe that the ability to continuously learn and a creative spirit are two
                            important factors in developing my career in this field.
                        </p>
                    </div>
                </div>

                <div data-aos="fade-left" className='about-right'>
                    <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={require("./selfie.png")} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
