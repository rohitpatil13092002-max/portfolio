import React from "react";
import "./textStack.css";

import Textstacklist from "../utils/Textstacklist";

const TextStack = () => {
  return (
    <>
      <div className="container-textstack" id="techstackpage">
        <h1 className="col-12 mt- mb-1 text-center">Technologies Stack</h1>
        <hr />
        <p className="text-center pt-3">
          👉 including Programming Languages , Frameeorks , Database , frontend
          and Backend tools and APIs
        </p>
        <div className="lag-main">
          {Textstacklist.map((t) => (
            <div key={t._id} className="lag-boxs">
              <div className="lag-box">
                <div className="">
                  <t.icon />
                </div>
                <div className="">
                  <h5>{t.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TextStack;
