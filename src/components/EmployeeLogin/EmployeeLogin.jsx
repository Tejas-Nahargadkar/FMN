import React, { useState } from "react";
import "./EmploayeeLogin.css";
import candidateprofilephoto from "../assets/candidateprofilephoto.svg";
import { Link } from "react-router-dom";
export default function EmployeeLogin() {
  const [showform, setShowform] = useState(false);

  const handleClick = () => {
    setShowform(!showform);
  };
  return (
    <div className="EmployeeLogin">
      <div className="Employee-Login-Banner">
        <div className="Employee-Login-Banner-ProfilePicture">
          <img src={candidateprofilephoto} alt="" />
        </div>

        <div className="Employee-Login-Banner-ProfileCardContent">
          <div className="Candidate-Name">
            <h1>Akash Singh</h1>
            <h2>UI/UX Designer at Techjain It Solutions</h2>
          </div>

          <div className="Employee-Login-Banner-SkillsAndLocation">
            <div className="Employee-Login-Banner-SkillsAndLocation-col">
              <h2>
                <span>Location</span>:Jabalpur
              </h2>
              <h2>
                <span>Experience</span> :5 Years
              </h2>
            </div>
            <div className="Employee-Login-Banner-SkillsAndLocation-col">
              <h2>
                {" "}
                <span>Phone Number</span>: 9752149055
              </h2>
              <h2>
                <span>Email</span>: aks.singh461@gmail.com
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="Employee-PersonalDetails">
        <div className="Employee-PersonalDetails-Header">
          <h1>Personal Details</h1>
          <div className="Employee-PersonalDetails-EditDetails">
            <button onClick={handleClick} className="Edit-Btn">
              Edit details
            </button>
          </div>
        </div>
        <div className="Employee-PersonalDetails-Details">
          <div className="Employee-PersonalDetails-Status">
            <div className="Employee-PersonalDetails-Status-Col">
              <h2>Date Of Birth</h2>
              <h3>03/09/1993</h3>
            </div>
            <div className="Employee-PersonalDetails-Status-Col">
              <h2>Gender </h2>
              <h3>Male</h3>
            </div>
            <div className="Employee-PersonalDetails-Status-Col">
              <h2>Marital status</h2>
              <h3>Single</h3>
            </div>
            <div className="Employee-PersonalDetails-Status-Col">
              <h2>Category</h2>
              <h3>General</h3>
            </div>
          </div>

          <div className="Employee-PersonalDetails-Location">
            <div className="Employee-PersonalDetails-Location-Col">
              <h2>Permanenet Address</h2>
              <h3>Hno 662 Maa Gayatri Villa Patel Nagar Maharajpur</h3>
            </div>
            <div className="Employee-PersonalDetails-Location-Col">
              <h2>Area of pincode</h2>
              <h3>482004</h3>
            </div>
            <div className="Employee-PersonalDetails-Location-Col">
              <h2>Hometown</h2>
              <h3>Jabalpur</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="Add-Personal-Details-Form">
        {showform && (
          <div className="Add-Personal-Details-Form-Container">
            <div className="Add-Personal-Details-Form-Header">
              <h1>Add Personal Details</h1>
            </div>
            <form action="submit">
              <div className="col">
                <label htmlFor="Name">Company Name</label>
                <input type="text" />
              </div>
              <div className="col">
                <label htmlFor="Name">Designations</label>
                <input type="text" />
              </div>
              <div className="col">
                <label htmlFor="Name">Gender</label>
                <div className="Radio-Row">
                  <input type="radio" />
                  <input type="radio" />
                </div>
              </div>
              <div className="col">
                <label htmlFor="Name">Email</label>
                <input type="text" />
              </div>
              <div className="col">
                <label htmlFor="Name">Permanent Address</label>
                <textarea name="Add" id="" cols="80" rows="10"></textarea>
              </div>
            </form>

            <div className="Add-Personal-Details-Buttons">
              <button className="Cancel">Cancel</button>
              <button className="Save">Save</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
