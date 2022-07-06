import { FilterAlt } from "@mui/icons-material";
import React from "react";
import "./CompanyPage.css";
import ActiveCompanyData from "../../../src/ActiveCompanyData";
import { Link } from "react-router-dom";
import { sector, industries, CompanyType } from "../../../src/FilterData";
export default function CompanyPage() {
  return (
    <div className="CompanyPage-Container">
      <div className="CompanyPage-Header">
        <h1>Featured companies actively hiring</h1>
      </div>

      <div className="CompanyPage-Cards-Container">
        <div className="Filters">
          <div className="Filter-Header">
            <h2>Filters</h2> <FilterAlt />
          </div>
          <FilterSector list={sector} title={"Sector"} />
          <Filterindustries list={industries} title={"Industries"} />
          <FilterCompanyType list={CompanyType} title={"Company Type"} />
        </div>
        <div className="CompanyCards-Grid">
          {ActiveCompanyData.map((CompaniesPageCard, index) => (
            <CompaniesCard key={index} {...CompaniesPageCard} />
          ))}
        </div>
      </div>
    </div>
  );
}
function CompaniesCard(props) {
  const { image, link } = props;
  return (
    <div className="Companies-Card">
      <div className="Company-Image">
        <img src={image} alt="" />
      </div>

      <div className="View-Buttons">
        <Link to={link} className="Company-Card-btn">
          View Jobs
        </Link>
      </div>
    </div>
  );
}
function FilterSector(props) {
  const { list,title } = props;
  return (
    <div className="FilterCard">
      <div className="FilterHeader">
        <h3>{title}</h3>
      </div>

      <div className="FilterCard-Checkboxes">
        {list.map((item, index) => (
          <div className="Checkboxes-Row" key={index}>
            <input type="checkbox" name="01" id="ID-01" />
            <label htmlFor="IT Industry">{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
function Filterindustries(props) {
  const { list,title } = props;
  return (
    <div className="FilterCard">
      <div className="FilterHeader">
        <h3>{title}</h3>
      </div>

      <div className="FilterCard-Checkboxes">
        {list.map((item, index) => (
          <div className="Checkboxes-Row" key={index}>
            <input type="checkbox" name="01" id="ID-01" />
            <label htmlFor="IT Industry">{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
function FilterCompanyType(props) {
  const { list,title } = props;
  return (
    <div className="FilterCard">
      <div className="FilterHeader">
        <h3>{title}</h3>
      </div>

      <div className="FilterCard-Checkboxes">
        {list.map((item, index) => (
          <div className="Checkboxes-Row" key={index}>
            <input type="checkbox" name="01" id="ID-01" />
            <label htmlFor="IT Industry">{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
}