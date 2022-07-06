import React from "react";
import "./CandidateProfile.css";
import candidateprofilephoto from "../assets/candidateprofilephoto.svg";
import { Link } from "react-router-dom";
export default function CandidateProfile() {
  return (
    <div className="CandidateProfile">
      <div className="CandidateProfile-ProfileCard">
        <div className="CandidateProfile-ProfilePicture">
          <img src={candidateprofilephoto} alt="" />
        </div>

        <div className="CandidateProfile-ProfileCardContent">
          <div className="Candidate-Name">
            <h1>Akash Singh</h1>
            <h2>UI/UX Designer at Techjain It Solutions</h2>
          </div>

          <div className="SkillsAndLocation">
            <div className="SkillsAndLocation-col">
              <h2>
                <span>Location</span>:Jabalpur
              </h2>
              <h2>
                <span>Experience</span> :5 Years
              </h2>
            </div>
            <div className="SkillsAndLocation-col">
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
      <div className="ResumeHeadline">
        <div className="ResumeHeadline-Header">
          <h1>Resume Headline</h1>
        </div>
        <div className="ResumeHeadline-content">
          <h2>
            Job seeker with B.Tech/B.E. currently living in Jabalpur and Having
            4+ Years of experience in UI/UX Designing.
          </h2>
        </div>
      </div>

      <div className="KeySkills">
        <div className="keySkills-Header">
          <h1>Key Skills</h1>
        </div>
        <div className="KeySkills-Skill">
          <h2>Illustrator</h2>
          <h2>Adobe PhotoShop cc</h2>
          <h2>Figma</h2>
          <h2>Wire Framing</h2>
          <h2>Adobe XD</h2>
          <h2>Prototyping</h2>
        </div>
      </div>

      <div className="Personal-Details-Section">
        <div className="Personal-Details-Section-Header">
          <h1>Personal Details</h1>
          <div className="EditDetails">
            <Link to="/">Edit details</Link>
          </div>
        </div>
        <div className="Personal-Details-Section-Details">
          <div className="Personal-Details-Section-Status">
            <div className="Status-Col">
              <h2>Date Of Birth</h2>
              <h3>03/09/1993</h3>
            </div>
            <div className="Status-Col">
              <h2>Gender </h2>
              <h3>Male</h3>
            </div>
            <div className="Status-Col">
              <h2>Marital status</h2>
              <h3>Single</h3>
            </div>
            <div className="Status-Col">
              <h2>Category</h2>
              <h3>General</h3>
            </div>
          </div>

          <div className="Personal-Details-Section-Location">
            <div className="Location-Col">
              <h2>Permanenet Address</h2>
              <h3>Hno 662 Maa Gayatri Villa Patel Nagar Maharajpur</h3>
            </div>
            <div className="Location-Col">
              <h2>Area of pincode</h2>
              <h3>482004</h3>
            </div>
            <div className="Location-Col">
              <h2>Hometown</h2>
              <h3>Jabalpur</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="Education-Details-Section">
        <div className="Education-Details-Section-Header">
          <h1>Education</h1>
          <div className="Education-Details-Section-Edit-Details">
            <Link to="/">Edit details</Link>
          </div>
        </div>
        <div className="Education-Details-Card">
          <div className="Education-Details-col">
            <h2>B.E / B.Tech:</h2>
            <h2>Computer Science</h2>
          </div>
          <div className="Education-Details-col">
            <h2>Rajiv Gandhi Prodyogiki Vishwavidyalaya (R.G.P.V).Bhopal</h2>
          </div>

          <div className="Education-Details-col">
            <h2>2013-2017</h2>
          </div>
          <div className="Education-Details-col">
            <Link to="/">Add 12'th</Link>
          </div>
          <div className="Education-Details-col">
            <Link to="/">Add 10'th</Link>
          </div>
        </div>
      </div>
      <div className="Employment-section">
        <div className="Employment-Section-Header">
          <h1>Employment</h1>
          <div className="Employment-Section-Edit-Details">
            <Link to="/">Edit Employment</Link>
          </div>
        </div>
        <div className="Employment-Card">
          <div className="Employment-Card-Col">
            <h2>UI/UX Designer </h2>
            <h3>Tech jain It Solution</h3>
            <h3>March- Present</h3>
          </div>
          <div className="Employment-Card-Col">
          <h2>UI/UX Designer </h2>
          <h3>Homepage Infotech</h3>
          <h3>August 2020- March 2022</h3>
        </div>
        </div>
       
      </div>
    </div>
  );
}
