import React from "react";
import V1 from "./Vector1.svg";
import V from "./Vector.svg";
import L100 from "./Layer100.svg";
import "./Resume.css";

import { ChevronRight } from "@mui/icons-material";
export default function Resume() {
  return (
    <div className="Resume">
      <div className="heading">
        <h1>How Create Resume-CV Online</h1>
      </div>
      <div className="containerr">
        <div className="box">
          <div className="cards">
            <button>
              <a href="/">
                <img src={V1} alt="" />
              </a>
            </button>
            <span className="count">1</span>
          </div>
          <div className="title">Select a template</div>
        </div>
        <div className="box">
          <div className="cards">
            <button>
              <a href="/">
                <img src={V} alt="" />
              </a>
            </button>
            <span className="count">2</span>
          </div>
          <div className="title">Optimize Content</div>
        </div>
        <div className="box">
          <div className="cards">
            <button>
              <a href="/">
                <img src={L100} alt="" />
              </a>
            </button>
            <span className="count"> 3</span>
          </div>
          <div className="title">Download PDF</div>
        </div>
      </div>
      <div className="Create-Resume-Button">
          <button className="Resume-BTN">Create Resume Button Now <ChevronRight/></button>
      </div>
    </div>
  );
}
