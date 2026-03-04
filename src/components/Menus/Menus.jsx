import React from "react";
import "./menus.css";
import {
  FcBiotech,
  FcHome,
  FcKindle,
  FcVideoProjector,
  FcVoicePresentation,
} from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { IoIosContacts } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpcCcQNUGyTpt1jjsWPZVrdEvPHO3kr7Tdg&s"
              alt="profile-pic"
            />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link ">
                {<FcHome />}
                <a className="linktext" href="#homepage">
                  Home
                </a>
              </div>
              <div className="nav-link ">
                {<FcAbout />}
                <a className="linktext" href="#aboutpage">
                  About
                </a>
              </div>

              <div className="nav-link ">
                {<FcBiotech />}
                <a className="linktext" href="#techstackpage">
                  {" "}
                  Tech Stack
                </a>
              </div>
              <div className="nav-link ">
                {<FcKindle />}
                Education
              </div>
              <div className="nav-link ">
                {<FcVideoProjector />}
                Projects
              </div>
              <div className="nav-link ">
                {<FcVoicePresentation />}
                Textimonal
              </div>
              <div className="nav-link ">
                {<IoIosContacts />}
                <a className="linktext" href="#contactpage">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-item">
            <div className="nav-link ">{<FcHome title="Hoome" />}</div>
            <div className="nav-link ">{<FcAbout title="About" />}</div>

            <div className="nav-link ">
              {<FcBusinessman title="Work Experince" />}
            </div>
            <div className="nav-link ">{<FcBiotech title="Tech Stack" />}</div>
            <div className="nav-link ">{<FcKindle title="Education" />}</div>
            <div className="nav-link ">
              {<FcVideoProjector title="Projects" />}
            </div>
            <div className="nav-link ">
              {<FcVoicePresentation title="Textimonal" />}
            </div>
            <div className="nav-link ">{<IoIosContacts title="Contact" />}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
