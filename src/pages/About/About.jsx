import React from "react";
import "./about.css";
const About = () => {
  return (
    <>
      <div className="about" id="aboutpage">
        <div className="row">
          <div className="col-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpcCcQNUGyTpt1jjsWPZVrdEvPHO3kr7Tdg&s"
              alt="profile-pic"
            />
          </div>
          <div className="col-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              I am a passionate Frontend Developer with strong skills in
              building responsive, user-friendly, and modern web applications. I
              specialize in creating interactive user interfaces using HTML,
              CSS, JavaScript, and React.js. I enjoy transforming ideas and
              designs into clean, efficient, and scalable code. I have
              experience working with component-based architecture, REST APIs
              integration, and responsive design principles to deliver seamless
              user experiences across devices. I focus on writing maintainable
              code, improving performance, and continuously learning new
              technologies to stay updated with modern web development trends. I
              am motivated to contribute to real-world projects, collaborate
              with teams, and grow as a developer while building impactful
              digital products.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
