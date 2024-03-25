import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar as BootstrapNavbar } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
            <BootstrapNavbar
                expand="md"
                variant="dark"
                className="fixed top-0 left-0 right-0 bg-[#282C33]"
                data-aos="fade-down"
                style={{ fontSize: "24px" }}
            >
                <div className="container-fluid d-flex justify-content-between align-items-center" style={{ maxWidth: "1560px", margin: "0 auto" }}>
                    <div>
                        <NavLink to="/" className="navbar-brand font-bold text-white d-flex align-items-center">
                            <img
                                src={require("./logo.png")}
                                alt="Logo"
                                className="img"
                                style={{ height: "50px", marginRight: "8px" }} // Adjusted height
                            />
                            <span style={{ fontSize: "24px" }}>Sam</span>
                        </NavLink>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setToggle(!toggle)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className={`collapse navbar-collapse justify-content-end  ${toggle ? "show" : ""}`} // Added justify-content-end class
                        id="navbarNav"
                    >
                        <ul className="navbar-nav gap-2">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    <span style={{ color: "#C778DD" }} className="text-[#C778DD] font-medium">#</span>home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/projects" className="nav-link">
                                    <span style={{ color: "#C778DD" }} className="text-[#C778DD] font-medium">#</span>work
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">
                                    <span style={{ color: "#C778DD" }} className="text-[#C778DD] font-medium">#</span>about-me
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">
                                    <span style={{ color: "#C778DD" }} className="font-medium">#</span>contacts
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </BootstrapNavbar>
        </>
    );
};

export default Navbar;
