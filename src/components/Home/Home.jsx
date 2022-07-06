import { Search } from "@mui/icons-material";
import React from "react";
import "./Home.css";
import PatternTriangle from "../assets/Trainglepattern.svg";
import ActiveCompanyData from "../../../src/ActiveCompanyData";
import MultiCarousel from "../CompanyCarousel/MultiCarousel";
import { Link } from "react-router-dom";
import TopCompanies from "../TopCompaniesHiring/TopCompanies";
import Card from "../Card/Card";
import Clientcard from "../ClientCard/Clientcard";
import Resume from "../Resume/Resume";
import Formh from '../FormH/Formh'
export default function Home() {
  return (
    <div
      className="Home-Container"
      style={{ backgroundImage: `url(${PatternTriangle})` }}
    >
      <div className="Banner">
        <div className="Banner-Content">
          <div className="Banner-Header">
            <h1>Find a job with FindMyNext</h1>
            <h2>Discover now 10,000+ best jobs on FindMyNextJob</h2>
          </div>
          <div className="Banner-Buttons">
            <a className="Btn-01" href="/">
              Create Resume Online
            </a>
            <a className="btn-02" href="/">
              Apply For Jobs
            </a>
          </div>
          <div className="Banner-Inputs">
            <input
              type="search"
              name="company/title"
              id="ID-01"
              placeholder="Company Title/Keywords"
            />
            <input
              type="search"
              name="Locations"
              id="ID-01"
              placeholder="Locations"
            />
            <input
              type="search"
              name="Qualifications"
              id="ID-01"
              placeholder="Qualifications"
            />

            <a href="">
              {" "}
              <Search /> Find Job
            </a>
          </div>
        </div>
      </div>
      <div className="Active-Companies">
        <div className="Companies-Header">
          <h1>Featured companies actively hiring</h1>
        </div>
        <div className="Featured-Companies-Cards">
          <MultiCarousel>
            {ActiveCompanyData.map((CompanyCard, index) => (
              <FeatureCard key={index} {...CompanyCard} />
            ))}
          </MultiCarousel>
        </div>

        <div className="ViewMore">
          <button className="ViewMore-btn">View All Companies</button>
        </div>
      </div>

      <div className="Home-note">
        <div className="Note-Card">
          <h3>Note :</h3>{" "}
          <p>
            These openings are not verified by FindMyNext , To apply for
            verified openings please <Link to="/">Subscribe !</Link>
          </p>
        </div>
      </div>
      <div className="Create-Resume">
        <Resume />
      </div>
      <div className="Accelerate-Card">
        <Card />
      </div>
      <div className="Top_Companies-Slider">
        <TopCompanies />
      </div>
      <div className="Testimonials">
        <Clientcard />
      </div>

      <div className="Post-Review-Form">
        <Formh/>
      </div>
    </div>
  );
}
function FeatureCard(props) {
  const { image, link } = props;
  return (
    <div className="Feature-Card">
      <div className="Card-Image">
        <img src={image} alt="" />
      </div>

      <div className="Card-Buttons">
        <Link to={link} className="Feature-Card-btn">
          View Jobs
        </Link>
      </div>
    </div>
  );
}
