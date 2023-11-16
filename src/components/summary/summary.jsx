import './summary.css'
import { NavLink } from "react-router-dom";



const Summary = () => {

    return (
        <>
            <div className='container'>
                <div className='content'>
                    <div data-aos="fade-right" className='leftside'>
                        <div className='top'>
                            <div className="head">
                                <span style={{ color: "#C778DD" }}>#</span>About
                            </div>
                            <div className="line"></div>

                        </div>
                        <div className='about'>
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
                        <div className="mt-7">
                            <NavLink to = '/about'>
                                <button className='more' >
                                    Read more ~
                                </button>

                            </NavLink>

                        </div>

                    </div>



                    <div data-aos="fade-left" className='rightside'>
                        <img className="mx-auto" src={require("./selfie.png")} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Summary