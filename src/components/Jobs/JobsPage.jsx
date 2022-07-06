import React from "react";
import { Link } from "react-router-dom";
import "./JobsPage.css";
import JobsData from "../../JobsData";
import { sector, industries, CompanyType } from "../../../src/FilterData";
export default function JobsPage() {
  return (
    <div className="JobsPage-Container">
       <div className="Jobs-Page-Filters-Container">
          <div className="Jobs-Page-Filter-Header">
            <h1>Recommended Jobs for You</h1>
          </div>
          <div className="Jobs-Page-Filter-Card-Container">
          <FilterSector list={sector} title={"Sector"} />
          <Filterindustries list={industries} title={"Industries"} />
          <FilterCompanyType list={CompanyType} title={"Company Type"} />
          </div>
        </div>

      <div className="Job-Cards-Container">
      {JobsData.map((JobsCard, index) => (
              <JOBCARD key={index} {...JobsCard} />
            ))}
      </div>
    </div>
  );
}

function JOBCARD(props) {
    const {  JobTitle, Experience,WorkFrom,Skills,Stipend, link } = props;
    return (
        <div className="Card">
        <div className="Card-Content">
          <h2>{JobTitle}</h2>
          <h3>{Experience}</h3>
          <h3>{WorkFrom}</h3>
          <h3>{Skills}</h3>
          <h3>{Stipend}</h3>
        </div>
        <div className="Apply-Job-Button">
          <Link to={link} className="Apply-Job-Btn">Apply Now</Link>
        </div>
      </div>
    );
  }
  function FilterSector(props) {
    const { list,title } = props;
    return (
      <div className="Jobs-Page-FilterCard">
        <div className="FilterHeader">
          <h3>{title}</h3>
        </div>
  
        <div className="Jobs-Page-FilterCard-Checkboxes">
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
      <div className="Jobs-Page-FilterCard">
        <div className="FilterHeader">
          <h3>{title}</h3>
        </div>
  
        <div className="Jobs-Page-FilterCard-Checkboxes">
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
      <div className="Jobs-Page-FilterCard">
        <div className="FilterHeader">
          <h3>{title}</h3>
        </div>
  
        <div className="Jobs-Page-FilterCard-Checkboxes">
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