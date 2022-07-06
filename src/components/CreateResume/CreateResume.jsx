import React from "react";
import "./CreateResume.css";
import createresumeimg from "../assets/createresumeimg.svg";
import CarouselImage from "../assets/ResumeBanner.svg";
import { Link } from "react-router-dom";
import template01 from '../assets/template01.svg'
import template02 from '../assets/template02.png'
import template03 from '../assets/template03.svg'
import template04 from '../assets/template04.svg'
export default function CreateResume() {
  return (
    <div className="CreateResume">
      <div className="CreateResume-Banner">
        <div className="CreateResume-Banner-Content">
          <h1>Design Resume with FindMyNext</h1>
        </div>

        <div className="CreateResume-Banner-Image">
          <img src={CarouselImage} alt="" />
        </div>
      </div>
      <div className="Build-CV-Carousel">
        <div className="Build-CV-Carousel-Content">
          <h2>Templates to win recruiters over</h2>

          <p>
            Wide selection of designs. Carefully optimised for clarity and
            impact. One click layouts - no formatting required.
          </p>
        </div>
        <div className="Build-CV-Carousel-Image">
          <img src={createresumeimg} alt="" />
        </div>
      </div>

      <div className="Templates-Container">
        <div className="Templates-Container-Header">
          <h1>Create a resume from thousands of templates</h1>
        </div>

        <div className="Templates-Container-Categories">
          <button className="Category-Btn">Professional</button>
          <button className="Category-Btn">Graphics Design</button>
          <button className="Category-Btn">Simple</button>
          <button className="Category-Btn">Design</button>
          <button className="Category-Btn">Modern</button>
        </div>

        <div className="Templates">
          <Link to='/'><img src={template01} alt="" /></Link>
          <Link to='/'><img src={template02} alt="" /></Link>
          <Link to='/'><img src={template03} alt="" /></Link>
          <Link to='/'><img src={template04} alt="" /></Link>
          <Link to='/'><img src={template01} alt="" /></Link>
          <Link to='/'><img src={template02} alt="" /></Link>
          <Link to='/'><img src={template03} alt="" /></Link>
          <Link to='/'><img src={template04} alt="" /></Link>
        </div>
      </div>
    </div>
  );
}
