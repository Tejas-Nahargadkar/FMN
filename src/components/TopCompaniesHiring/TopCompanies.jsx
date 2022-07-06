import { ArrowCircleRight } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import TopCompaniesData from "../../../src/TopCompaniesHiringData";
import MultiCarousel from "../CompanyCarousel/MultiCarousel";
import "./TopCompanies.css";
export default function TopCompanies() {
  return (
    <div className="TopCompanies">
      <div className="Header-TopCompanies">
        <h1>Explore top companies hiring now</h1>
      </div>
      <div className="TopCompanies-Cards">
        <MultiCarousel>
          {TopCompaniesData.map((TopCompanyCard, index) => (
            <TopCompaniesCard key={index} {...TopCompanyCard} />
          ))}
        </MultiCarousel>
      </div>
    </div>
  );
}
function TopCompaniesCard(props) {
  const { title, link } = props;
  return (
    <div className="TopCompany-Card">
      <div className="TopCompany-Title">
        <h2>{title}</h2>
      </div>
      <div className="Button-route">
        <Link to={link}>
          {" "}
          <ArrowCircleRight />{" "}
        </Link>
      </div>
    </div>
  );
}
