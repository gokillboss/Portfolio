import "./styles.css"
// eslint-disable-next-line
import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { NavLink } from "react-router-dom";



const Navbar = () => {
    //const [toggle, setToggle] = useState(false);
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return <>
        <div data-aos="fade-down" className="bar">
            <div className="top">
                <div className="name">
                    <img src={require("./logo.png")} alt="" />
                    Sam Ho
                </div>
                <div className={"menu"}> {/** use toggle here */}
                    <NavLink to='/'>
                        <li className="custom-li">
                            <span className="sp-li">#</span>Home
                        </li>
                    </NavLink>

                    <NavLink to='/projects'>
                        <li className="custom-li">
                            <span className="sp-li">#</span>Work
                        </li>
                    </NavLink>

                    <NavLink to='/about'>
                        <li className="custom-li">
                            <span className="sp-li">#</span>About-me
                        </li>
                    </NavLink>

                    <NavLink to='/contact'>
                        <li className="custom-li">
                            <span className="sp-li">#</span>Contact
                        </li>
                    </NavLink>


                </div>
            </div>
        </div>
    </>
}


export default Navbar