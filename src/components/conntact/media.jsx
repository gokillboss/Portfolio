import React from "react";
import { Container } from "react-bootstrap";
import { Discord, Linkedin } from 'react-bootstrap-icons';

const Allmedia = () => {
    return (
        <Container>
            <div style={{ margin: "auto", marginTop: "3rem", maxWidth: "1560px" }}>
                <div
                    style={{
                        color: "white",
                        fontSize: "32px",
                        fontWeight: "500",
                    }}
                >
                    <span style={{ color: "#C778DD", marginLeft: "1rem" }}>#</span>
                    all-media
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "3rem",
                        alignItems: "center",
                        margin: "2rem 2rem",
                    }}
                    className="flex gap-6"
                >
                    <a href="tyla3713" className="text-decoration-none">
                        <div
                            style={{
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <Discord size={24} />
                            <span>@Sam Ho</span>
                        </div>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/sam-ho-b1006b221/" 
                        className="text-decoration-none"
                    >
                        <div
                            style={{
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <Linkedin size={24} />
                            <span>@Sam Ho</span>
                        </div>
                    </a>
                </div>
            </div>
        </Container>
    );
};

export default Allmedia;