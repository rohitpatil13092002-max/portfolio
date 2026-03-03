import React from "react";
import "./textStack.css";

import Textstacklist from "../utils/Textstacklist";

const TextStack = () => {
  return (
    <>
      <div className="container textstack">
        <h1 className="col-12 mt- mb-1 text-center">Technologies Stack</h1>
        <hr />
        <p className="text-center pt-3">
          👉 including Programming Languages , Frameeorks , Database , frontend
          and Backend tools and APIs
        </p>
        <div className="row">
          {Textstacklist.map((t) => (
            <div key={t._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <t.icon />
                      </div>
                      <div className="media-body">
                        <h5>{t.name}</h5>
                      </div>
                    </div>
                  </div>
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
