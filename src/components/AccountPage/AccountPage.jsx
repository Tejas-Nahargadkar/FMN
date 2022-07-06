import React, { useState } from "react";
import "./AccountPage.css";
import SignUp from '../SignUp/Signup'
export default function AccountPage() {
  const [ShowTab, setShowTab] = useState(1);

  const toggleTab = (index) => {
    setShowTab(index);
  };

  return (
    <div className="AccountPage-Container">
      <div className="AccountPage">
        <div className="Account-Page-Tabs">
          <button
            className={ShowTab === 1 ? "Active-Tab" : "Tab"}
            onClick={() => toggleTab(1)}
          >
            <h2>Candidate</h2>
          </button>
          <button
            className={ShowTab === 2 ? "Active-Tab" : "Tab"}
            onClick={() => toggleTab(2)}
          >
            <h2>Employer</h2>
          </button>
          <button
            className={ShowTab === 3 ? "Active-Tab" : "Tab"}
            onClick={() => toggleTab(3)}
          >
            <h2>Company</h2>
          </button>
        </div>

        <div className="Account-Page-Tabs-Data">
          {ShowTab === 1 && (
            <div className="active-content">
             <SignUp/>
            </div>
          )}
          {ShowTab === 2 && (
            <div className="active-content">
              <h1>Form 2</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloribus cumque impedit, culpa consequuntur iure ex nobis error
                eum nihil exercitationem dolores fugiat eos vel quae sint fugit
                natus reiciendis assumenda.
              </p>
            </div>
          )}

          {ShowTab === 3 &&
            <div className="active-content">
              <h1>Form-3</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloribus cumque impedit, culpa consequuntur iure ex nobis error
                eum nihil exercitationem dolores fugiat eos vel quae sint fugit
                natus reiciendis assumenda.
              </p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
