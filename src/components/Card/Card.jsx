import React from "react";
import fmn from "./findmynext.svg";
import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <div className="upper_container">
        <h1>Accelerate your job search with premium services</h1>
        <p>
          Services to help you get hired, faster: from preparing your CV,getting
          recruiter attention, finding the right jobs, and more!
        </p>
      </div>
      <div className="lower_container">
        <div className="left">
          <img src={fmn} alt="" />
        </div>
        <div className="right">
          <h2 className="resume">Resume Writing</h2>
          <h2 className="resume">Resume Display</h2>

          <button>Learn More</button>
          <h3>Include Paid Services</h3>
        </div>
      </div>
    </div>
  );
}
