import React from "react";
import HSC from "../HSC/HSC";
import SSC from "../SSC/SSC";

const Result = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
               
                <hr />
                <h1>Result PAGE </h1>
                <SSC />
                <HSC />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
