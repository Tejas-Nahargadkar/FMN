import React, { useState } from "react";
import "./CEOForm.css";
import CloseIcon from "@mui/icons-material/Close";
export default function CEOForm() {
  const [showform, setShowform] = useState(false);

  const handleClick = () => {
    setShowform(!showform);
  };
  return (
    <div className="CEOForm-Container">
      <div className="Button">
        <button onClick={handleClick} className="Write-to-CEO-Form-btn">
          Write to CEO
        </button>
      </div>
      {showform && (
        <div id="ID-00" className="Write-to-form-Container">
          <div className="Close-Button">
            <button onClick={() => setShowform(false)} className="Close-BTN">
              {" "}
              <CloseIcon />{" "}
            </button>
          </div>
          <form action="submit">
            <div className="Header">
              <h1>Write to C.E.O</h1>
            </div>

            <div className="Write-to-CEO-Form">
              <input type="text" name="Name" id="ID-01" placeholder="Name" />
              <input
                type="email"
                name="Email"
                id="ID-02"
                placeholder="Enter Your Email"
              />
              <input
                type="text"
                name="Phone"
                id="ID-03"
                placeholder="Phone Number"
              />
              <textarea name="Remarks" id="ID-04" cols="85" rows="7">
                Remarks
              </textarea>
            </div>

            <div className="Form-Buttons">
              <button className="Form-BTN">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
