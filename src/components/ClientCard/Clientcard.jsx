import React from "react";
import TestimonialData from '../../../src/TestimonialsData'
import "./Clientcard.css";
import MultiCarousel from "../CompanyCarousel/MultiCarousel";
export default function Clientcard() {
  return (
    <div className="maincard">
      <div className="heading">
        <h1 className="underline">What Client Says</h1>
      </div>
      <div className="subcardcontainer">
      <MultiCarousel>
          {TestimonialData.map((CardData, index) => (
            <TestimonialCard key={index} {...CardData} />
          ))}
          </MultiCarousel>
      </div>
    </div>
  );
}
function TestimonialCard(props) {
  const { image,Name,Review } = props;
  return (
    <div className="subcard">
    <div className="cardimg">
      <img src={image} alt="" />
    </div>
    <div className="content">
      <h2>{Name}</h2>
      <p>
       {Review}
      </p>
    </div>
  </div>
  );
}