import React from "react";
import "./contact.css"; // Import your CSS file

const Contact = () => {
  return (
    <div data-aos-delay="1000" data-aos="fade-up" className="contact-container">
      {/* top */}
      <div className="top-container">
        {/* header */}
        <div className="head">
          <div className="title-container">
            <span className="title-prefix">#</span>
            <span className="title-text">Contacts</span>
          </div>
          <div className="line"></div>
        </div>
      </div>
      {/* bottom */}
      <div className="bottom-container">
        {/* left */}
        <div className="left-container">
          <p className="description-text">
            I am interested in web development, including frontend and backend.
            I always aim to become the best web developer.
            <br />
            <br />
            Contact me, and we'll be on the same side !!!
          </p>
        </div>
        {/* right */}
        <div className="right-container">
          {/* box */}
          <div className="box-container">
            <h2 className="box-title">Message me here</h2>
            {/* get in touch */}
            <div className="get-in-touch">
              {/* links */}
              <div className="link-container">
                <a href="https://www.linkedin.com/in/sam-ho-b1006b221/">
                  <div
                    style={{
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <img
                      style={{ width: "8%", margin: "4px" }}
                      src={require("./LinkedIn.png")}
                      alt=""
                    />
                    <span>@Sam Ho</span>
                  </div>
                </a>
              </div>
              <div className="link-container">
                <img src={require("./Email.png")} alt="" />
                <span className="link-text">samho.bmt@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
