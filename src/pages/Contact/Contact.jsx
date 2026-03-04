import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div>
      <>
        <div className="contact" id="contactpage">
          <div className="row">
            <div className="col-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-260nw-2519454685.jpg"
                alt="profile-pic"
              />
            </div>
            <div className="col-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>Contact Me</h1>
              <form>
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" required />
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
                <label>Message</label>
                <textarea
                  rows={4}
                  placeholder="Write your message"
                  defaultValue={""}
                />
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Contact;
